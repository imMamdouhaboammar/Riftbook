#!/usr/bin/env python3
"""Validate Riftbook Markdown contributions with repository-specific rules."""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from urllib.parse import parse_qsl, urlsplit

TRACKING_PREFIXES = ("utm_",)
TRACKING_KEYS = {"ref", "referrer", "affiliate", "aff", "campaign"}
PLACEHOLDER_RE = re.compile(r"\b(?:TBD|TODO|COMING SOON)\b", re.IGNORECASE)
MARKDOWN_LINK_RE = re.compile(r"!?\[[^\]]*]\(([^)]+)\)")
CODE_FENCE_RE = re.compile(r"```.*?```", re.DOTALL)
INLINE_CODE_RE = re.compile(r"`[^`\n]+`")
EXEMPT_FILES = {
    "CONTRIBUTING.md",
    "CURATION.md",
    "REVIEW.md",
    "ROADMAP.md",
    "CHANGELOG.md",
}
EXEMPT_PREFIXES = (
    "templates/",
    ".github/",
)


@dataclass(frozen=True)
class Finding:
    path: Path
    line: int
    rule: str
    message: str

    def render(self) -> str:
        return f"{self.path}:{self.line}: [{self.rule}] {self.message}"


def strip_code(text: str) -> str:
    text = CODE_FENCE_RE.sub("", text)
    return INLINE_CODE_RE.sub("", text)


def line_number(text: str, offset: int) -> int:
    return text.count("\n", 0, offset) + 1


def is_exempt(path: Path) -> bool:
    value = path.as_posix()
    return value in EXEMPT_FILES or value.startswith(EXEMPT_PREFIXES)


def tracking_parameters(url: str) -> list[str]:
    query = urlsplit(url).query
    result: list[str] = []
    for key, _ in parse_qsl(query, keep_blank_values=True):
        normalized = key.lower()
        if normalized.startswith(TRACKING_PREFIXES) or normalized in TRACKING_KEYS:
            result.append(key)
    return result


def validate_markdown(path: Path, text: str) -> list[Finding]:
    findings: list[Finding] = []
    scanned = strip_code(text)

    if not is_exempt(path):
        for match in PLACEHOLDER_RE.finditer(scanned):
            findings.append(
                Finding(
                    path,
                    line_number(scanned, match.start()),
                    "placeholder",
                    f"Remove placeholder text: {match.group(0)!r}.",
                )
            )

    for match in MARKDOWN_LINK_RE.finditer(scanned):
        target = match.group(1).strip().split(maxsplit=1)[0].strip("<>")
        if target.startswith(("http://", "https://")):
            params = tracking_parameters(target)
            if params:
                findings.append(
                    Finding(
                        path,
                        line_number(scanned, match.start(1)),
                        "tracking-parameter",
                        f"Remove tracking parameters from URL: {', '.join(params)}.",
                    )
                )

    if path.name != "README.md" and not is_exempt(path):
        if scanned.strip() and not scanned.lstrip().startswith("#"):
            findings.append(
                Finding(
                    path,
                    1,
                    "missing-title",
                    "Markdown content should start with an H1 title.",
                )
            )

    return findings


def discover_markdown(root: Path) -> list[Path]:
    return sorted(
        path
        for path in root.rglob("*.md")
        if ".git" not in path.parts and not any(part.startswith(".venv") for part in path.parts)
    )


def changed_markdown(root: Path, base: str) -> list[Path]:
    command = ["git", "diff", "--name-only", "--diff-filter=ACMR", f"{base}...HEAD", "--", "*.md"]
    completed = subprocess.run(command, cwd=root, check=False, text=True, capture_output=True)
    if completed.returncode != 0:
        raise RuntimeError(completed.stderr.strip() or "Unable to determine changed Markdown files.")
    return sorted(root / line for line in completed.stdout.splitlines() if line.strip())


def validate_paths(root: Path, paths: Iterable[Path]) -> list[Finding]:
    findings: list[Finding] = []
    for path in paths:
        absolute = path if path.is_absolute() else root / path
        if not absolute.exists():
            continue
        relative = absolute.relative_to(root)
        findings.extend(validate_markdown(relative, absolute.read_text(encoding="utf-8")))
    return findings


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path.cwd())
    parser.add_argument(
        "--changed-from",
        metavar="GIT_REF",
        help="Validate only Markdown files changed from the supplied Git ref.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    root = args.root.resolve()
    try:
        paths = changed_markdown(root, args.changed_from) if args.changed_from else discover_markdown(root)
    except RuntimeError as error:
        print(f"content-quality: {error}", file=sys.stderr)
        return 2

    findings = validate_paths(root, paths)
    for finding in findings:
        print(finding.render())

    if findings:
        print(f"\nFound {len(findings)} content quality issue(s) in {len(paths)} Markdown file(s).")
        return 1

    print(f"Content quality check passed for {len(paths)} Markdown file(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
