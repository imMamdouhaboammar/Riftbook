#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const defaultRegistry = path.resolve(scriptDir, "../integrations/registry.json");

function parseArgs(argv) {
  const args = {
    project: process.cwd(),
    registry: defaultRegistry,
    json: false,
    max: 12,
    thresholdOffset: 0,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--project") args.project = path.resolve(argv[++i]);
    else if (arg === "--registry") args.registry = path.resolve(argv[++i]);
    else if (arg === "--json") args.json = true;
    else if (arg === "--format") {
      const format = argv[++i];
      if (format === "json") args.json = true;
      else if (format !== "markdown") throw new Error("--format must be json or markdown");
    }
    else if (arg === "--max") args.max = Number(argv[++i]);
    else if (arg === "--threshold-offset") args.thresholdOffset = Number(argv[++i]);
    else if (arg === "--help" || arg === "-h") {
      console.log(`Riftbook Integration Selector

Usage:
  node scripts/integration-selector.mjs [options]

Options:
  --project <path>           Project to inspect. Defaults to current directory.
  --registry <path>          Registry JSON path.
  --json                     Print JSON instead of Markdown.
  --format <json|markdown>   Explicit output format.
  --max <number>             Maximum candidates to print. Default: 12.
  --threshold-offset <n>     Raise or lower every selection threshold.
  --help                     Show this help.

This command is read-only. It never installs an integration.`);
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  if (!Number.isFinite(args.max) || args.max < 1) {
    throw new Error("--max must be a positive number");
  }
  if (!Number.isFinite(args.thresholdOffset)) {
    throw new Error("--threshold-offset must be a number");
  }

  return args;
}

function exists(project, relativePath) {
  return fs.existsSync(path.join(project, relativePath));
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`Cannot read JSON ${filePath}: ${error.message}`);
  }
}

function walk(project, options = {}) {
  const maxFiles = options.maxFiles ?? 12000;
  const maxDepth = options.maxDepth ?? 8;
  const ignored = new Set([
    ".git",
    "node_modules",
    ".next",
    "dist",
    "build",
    "coverage",
    ".turbo",
    ".cache",
    ".codegraph",
    ".venv",
    "venv",
    "__pycache__",
    "target",
    "vendor",
  ]);

  const files = [];
  const stack = [{ dir: project, depth: 0 }];

  while (stack.length && files.length < maxFiles) {
    const { dir, depth } = stack.pop();
    let entries = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (files.length >= maxFiles) break;
      if (ignored.has(entry.name)) continue;
      const full = path.join(dir, entry.name);
      const relative = path.relative(project, full);
      if (entry.isDirectory()) {
        if (depth < maxDepth) stack.push({ dir: full, depth: depth + 1 });
      } else if (entry.isFile()) {
        files.push(relative);
      }
    }
  }

  return files;
}

function packageData(project) {
  const packageFiles = [];
  const rootPackage = path.join(project, "package.json");
  if (fs.existsSync(rootPackage)) packageFiles.push(rootPackage);

  for (const workspaceRoot of ["apps", "packages"]) {
    const root = path.join(project, workspaceRoot);
    if (!fs.existsSync(root)) continue;
    for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const packageFile = path.join(root, entry.name, "package.json");
      if (fs.existsSync(packageFile)) packageFiles.push(packageFile);
    }
  }

  const packages = [];
  for (const packageFile of packageFiles) {
    try {
      const data = JSON.parse(fs.readFileSync(packageFile, "utf8"));
      packages.push({ file: path.relative(project, packageFile), data });
    } catch {
      packages.push({ file: path.relative(project, packageFile), data: {} });
    }
  }
  return packages;
}

function dependencyNames(packages) {
  const names = new Set();
  for (const { data } of packages) {
    for (const section of ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"]) {
      for (const name of Object.keys(data[section] ?? {})) names.add(name);
    }
  }
  return names;
}

function detect(project) {
  if (!fs.existsSync(project) || !fs.statSync(project).isDirectory()) {
    throw new Error(`Project directory not found: ${project}`);
  }

  const files = walk(project);
  const packages = packageData(project);
  const deps = dependencyNames(packages);
  const extensions = new Set(files.map((file) => path.extname(file).toLowerCase()).filter(Boolean));
  const signals = new Set();
  const reasons = new Map();

  const add = (signal, reason) => {
    signals.add(signal);
    if (!reasons.has(signal)) reasons.set(signal, []);
    reasons.get(signal).push(reason);
  };

  const hasAnyFile = (...names) => names.some((name) => files.includes(name) || exists(project, name));
  const hasFileMatch = (regex) => files.some((file) => regex.test(file));

  if (deps.has("react") || deps.has("react-dom")) add("react", "React dependency detected");
  if (deps.has("next") || hasAnyFile("next.config.js", "next.config.mjs", "next.config.ts")) {
    add("nextjs", "Next.js configuration or dependency detected");
    add("react", "Next.js uses React");
  }
  if (deps.has("vue") || deps.has("@vue/core")) add("vue", "Vue dependency detected");
  if (deps.has("svelte") || deps.has("@sveltejs/kit")) add("svelte", "Svelte dependency detected");
  if (signals.has("react") || signals.has("vue") || signals.has("svelte") || hasFileMatch(/\.(tsx|jsx|vue|svelte)$/)) {
    add("frontend", "Frontend source files or framework detected");
  }
  if (hasFileMatch(/(components|pages|app|views|screens)\//i)) add("ui_task", "UI-oriented directories detected");
  if (hasAnyFile("tailwind.config.js", "tailwind.config.ts", "components.json") || deps.has("tailwindcss")) {
    add("design_system", "Design-system or Tailwind configuration detected");
  }
  if (hasFileMatch(/landing|marketing|homepage|hero/i)) add("landing_page", "Landing or marketing surface detected");
  if (hasFileMatch(/\.stories\.(tsx|ts|jsx|js)$/) || deps.has("@storybook/react")) add("component_library", "Storybook or stories detected");
  if (deps.has("react-error-boundary") || hasFileMatch(/error-boundary|ErrorBoundary|error\.tsx|global-error\.tsx/i)) {
    add("error_boundary_present", "Runtime error boundary implementation detected");
  } else if (signals.has("react")) {
    add("missing_error_boundary", "React detected without an obvious error boundary file or dependency");
  }

  if (files.length >= 800) add("large_repo", `${files.length} files scanned`);
  else if (files.length >= 180) add("medium_repo", `${files.length} files scanned`);

  if (hasAnyFile("pnpm-workspace.yaml", "turbo.json", "nx.json", "lerna.json") || packages.length > 2) {
    add("monorepo", "Workspace or multiple package manifests detected");
  }

  if (extensions.has(".ts") || extensions.has(".tsx")) add("typescript", "TypeScript files detected");
  const languageExtensions = [".ts", ".tsx", ".js", ".jsx", ".py", ".go", ".rs", ".java", ".cs", ".php", ".rb", ".swift", ".kt"];
  const languages = languageExtensions.filter((ext) => extensions.has(ext));
  if (languages.length >= 3) add("multi_language", `Multiple language families detected: ${languages.join(", ")}`);

  if (hasAnyFile("CLAUDE.md", "AGENTS.md", "GEMINI.md") || hasFileMatch(/^\.claude\/|^\.codex\/|^\.cursor\/|^\.agents\//)) {
    add("agent_behavior", "Agent instruction or skill directories detected");
  }
  if (hasFileMatch(/^\.codex\//) || hasAnyFile("AGENTS.md")) add("codex", "Codex-oriented configuration detected");
  if (hasFileMatch(/agent-kernel|delegate-team|multi-agent/i)) add("multi_agent", "Multi-agent or governance artifacts detected");
  if (hasAnyFile("TASKS.md", "IMPLEMENTATION_PLAN.md", "progress.md", "task_plan.md")) add("long_running", "Persistent task or plan files detected");
  if (hasAnyFile("RULES.md", "DECISIONS.md", "STACK_DECISION.md")) add("shared_rules", "Shared rules or decision files detected");

  if (hasFileMatch(/^\.github\/workflows\/.+\.ya?ml$/) || hasAnyFile(".gitlab-ci.yml")) add("ci", "CI workflow detected");
  if (hasFileMatch(/eslint|biome|ruff|golangci|stylelint|markdownlint/i)) add("linters", "Linter configuration detected");
  if (signals.has("ci")) add("pull_requests", "CI is present and can support pull-request checks");
  if (hasFileMatch(/test|spec|__tests__/i)) add("tests", "Test files detected");
  if (files.filter((file) => file.endsWith(".md")).length >= 20) add("documentation", "Substantial Markdown documentation detected");
  if (hasFileMatch(/wordpress|wp-content|wp-config/i)) add("wordpress", "WordPress files detected");
  if (hasFileMatch(/woocommerce/i) || deps.has("@woocommerce/woocommerce-rest-api")) add("woocommerce", "WooCommerce files detected");

  if (hasFileMatch(/benchmark|eval|metrics/i)) add("benchmark_goal", "Benchmark or evaluation artifacts detected");
  if (hasFileMatch(/research|experiment/i)) add("research_task", "Research or experiment artifacts detected");
  if (hasFileMatch(/rag|retrieval|embedding|corpus/i)) add("document_corpus", "RAG or corpus artifacts detected");
  if (hasFileMatch(/memory|knowledge-graph|graphiti/i)) add("agent_memory", "Memory or knowledge-graph artifacts detected");

  if (signals.has("large_repo") || hasFileMatch(/architecture|adr|decisions/i)) add("architecture_task", "Architecture context likely relevant");
  if (signals.has("large_repo") || signals.has("medium_repo")) add("refactor_task", "Repository size can justify structured refactor context");
  if (signals.has("tests") && files.length > 350) add("test_heavy", "Large project with tests detected");
  if (files.length > 500) add("context_pressure", "Repository size may create agent context pressure");
  if (files.length > 350) add("verbose_cli", "Large repository may produce noisy command output");
  if (signals.has("frontend")) add("quality_gate", "Frontend work benefits from explicit release checks");
  if (signals.has("react")) add("code_change", "React code is available for review guards");
  if (signals.has("documentation")) add("code_change", "Documentation changes can use focused guards");

  return {
    project,
    fileCount: files.length,
    packageFiles: packages.map((entry) => entry.file),
    dependencies: [...deps].sort(),
    signals: [...signals].sort(),
    reasons: Object.fromEntries([...reasons.entries()].map(([key, value]) => [key, [...new Set(value)]])),
  };
}

function scoreCandidate(integration, context, thresholdOffset = 0) {
  const matchedSignals = integration.selection.signals.filter((signal) => context.signals.includes(signal));
  let score = integration.selection.base_score + matchedSignals.length * 2;
  const notes = [];

  if (matchedSignals.length) notes.push(`matched: ${matchedSignals.join(", ")}`);
  else notes.push("no registry signal matched");

  if (integration.policy === "reference-only") {
    score = Math.max(score, matchedSignals.length ? 3 : 0);
    notes.push("discovery/reference source; never bulk install");
  }
  if (integration.policy === "manual-only") notes.push("manual approval required");
  if (integration.policy === "dependency-auto" && !context.signals.includes("react")) score -= 6;
  if (integration.id === "react-error-boundary" && context.signals.includes("error_boundary_present")) {
    score -= 6;
    notes.push("an error boundary already appears present");
  }
  if (integration.id === "reviewdog" && !context.signals.includes("ci")) {
    score -= 4;
    notes.push("no CI detected");
  }
  if (integration.id === "oh-my-codex" && !context.signals.includes("codex")) {
    score -= 5;
    notes.push("Codex configuration not detected");
  }

  const threshold = integration.selection.threshold + thresholdOffset;
  const selected = score >= threshold;
  const action =
    integration.policy === "reference-only"
      ? selected ? "discover selectively" : "skip"
      : integration.policy === "manual-only"
        ? selected ? "manual review" : "skip"
        : selected
          ? "candidate"
          : "skip";

  return {
    id: integration.id,
    name: integration.name,
    category: integration.category,
    type: integration.type,
    policy: integration.policy,
    exclusiveGroup: integration.exclusive_group,
    score,
    threshold,
    selected,
    action,
    matchedSignals,
    notes,
    repo: integration.repo,
  };
}

function resolveExclusiveGroups(scored) {
  const selected = scored.filter((item) => item.selected);
  const groups = new Map();

  for (const item of selected) {
    if (!item.exclusiveGroup) continue;
    if (!groups.has(item.exclusiveGroup)) groups.set(item.exclusiveGroup, []);
    groups.get(item.exclusiveGroup).push(item);
  }

  const conflicts = [];
  for (const [group, items] of groups.entries()) {
    if (items.length < 2) continue;
    const sorted = [...items].sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
    conflicts.push({
      group,
      preferred: sorted[0].id,
      candidates: sorted.map((item) => ({ id: item.id, score: item.score })),
      rule: "Choose one primary. Keep a second only with a documented complementary role.",
    });
  }

  return conflicts;
}

function analyze(project, registry, thresholdOffset = 0) {
  const context = detect(project);
  const scored = registry.integrations
    .map((integration) => scoreCandidate(integration, context, thresholdOffset))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  const conflicts = resolveExclusiveGroups(scored);

  return {
    generatedAt: new Date().toISOString(),
    readOnly: true,
    project: context,
    candidates: scored,
    conflicts,
    nextStep: "Review candidates, resolve conflicts, verify current upstream installation, and record approved choices in ACTIVE_INTEGRATIONS.md.",
  };
}

function markdownReport(result, max) {
  const lines = [];
  lines.push("# Riftbook Integration Selection Report", "");
  lines.push(`- Project: \`${result.project.project}\``);
  lines.push(`- Files scanned: ${result.project.fileCount}`);
  lines.push(`- Package manifests: ${result.project.packageFiles.length ? result.project.packageFiles.map((item) => `\`${item}\``).join(", ") : "none"}`);
  lines.push(`- Read-only: yes`, "");
  lines.push("## Detected signals", "");
  if (!result.project.signals.length) lines.push("No strong project signals detected.");
  for (const signal of result.project.signals) {
    const reasons = result.project.reasons[signal] ?? [];
    lines.push(`- \`${signal}\`: ${reasons.join("; ")}`);
  }

  lines.push("", "## Top candidates", "");
  lines.push("| Integration | Category | Score | Threshold | Policy | Action | Matched signals |");
  lines.push("|---|---|---:|---:|---|---|---|");
  for (const item of result.candidates.slice(0, max)) {
    lines.push(`| ${item.name} | ${item.category} | ${item.score} | ${item.threshold} | \`${item.policy}\` | ${item.action} | ${item.matchedSignals.join(", ") || "none"} |`);
  }

  lines.push("", "## Overlap warnings", "");
  if (!result.conflicts.length) {
    lines.push("No selected exclusive-group conflicts.");
  } else {
    for (const conflict of result.conflicts) {
      lines.push(`- \`${conflict.group}\`: prefer \`${conflict.preferred}\`; candidates ${conflict.candidates.map((item) => `${item.id} (${item.score})`).join(", ")}.`);
    }
  }

  lines.push("", "## Next step", "", result.nextStep, "");
  lines.push("> This selector never installs anything. Use the Riftbook selection policy and bootstrap prompt for verified execution.");
  return lines.join("\n");
}

export { analyze, detect, scoreCandidate };

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = parseArgs(process.argv.slice(2));
    const registry = readJson(args.registry);
    const result = analyze(args.project, registry, args.thresholdOffset);
    if (args.json) console.log(JSON.stringify(result, null, 2));
    else console.log(markdownReport(result, args.max));
  } catch (error) {
    console.error(`integration-selector: ${error.message}`);
    process.exitCode = 1;
  }
}
