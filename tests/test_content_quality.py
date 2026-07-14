from pathlib import Path
import sys
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))

from check_content_quality import tracking_parameters, validate_markdown


class ContentQualityTests(unittest.TestCase):
    def test_accepts_clean_resource_card(self) -> None:
        findings = validate_markdown(
            Path("tools/example.md"),
            "# Example\n\n[Official site](https://example.com/docs)\n",
        )
        self.assertEqual(findings, [])

    def test_flags_placeholder_outside_exempt_files(self) -> None:
        findings = validate_markdown(Path("tools/example.md"), "# Example\n\nTODO\n")
        self.assertEqual([finding.rule for finding in findings], ["placeholder"])

    def test_ignores_placeholder_inside_code_fence(self) -> None:
        findings = validate_markdown(
            Path("tools/example.md"),
            "# Example\n\n```text\nTODO\n```\n",
        )
        self.assertEqual(findings, [])

    def test_flags_tracking_parameters(self) -> None:
        findings = validate_markdown(
            Path("tools/example.md"),
            "# Example\n\n[Official site](https://example.com/docs?utm_source=test&ref=abc)\n",
        )
        self.assertEqual(
            [finding.rule for finding in findings],
            ["tracking-parameter"],
        )
        self.assertIn("utm_source", findings[0].message)
        self.assertIn("ref", findings[0].message)

    def test_requires_h1_for_content_cards(self) -> None:
        findings = validate_markdown(Path("tools/example.md"), "Plain opening paragraph.\n")
        self.assertEqual([finding.rule for finding in findings], ["missing-title"])

    def test_governance_files_are_exempt_from_placeholder_rule(self) -> None:
        findings = validate_markdown(Path("ROADMAP.md"), "# Roadmap\n\nTODO later\n")
        self.assertEqual(findings, [])

    def test_tracking_parameter_parser_is_case_insensitive(self) -> None:
        self.assertEqual(
            tracking_parameters("https://example.com/?UTM_Source=x&Campaign=y&id=1"),
            ["UTM_Source", "Campaign"],
        )


if __name__ == "__main__":
    unittest.main()
