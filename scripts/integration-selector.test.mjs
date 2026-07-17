import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { analyze, detect } from "./integration-selector.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const registry = JSON.parse(
  fs.readFileSync(path.resolve(scriptDir, "../integrations/registry.json"), "utf8"),
);

function fixture(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "riftbook-selector-"));
  for (const [relative, content] of Object.entries(files)) {
    const target = path.join(dir, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  }
  return dir;
}

test("detects React, frontend, CI, and missing error boundary", () => {
  const dir = fixture({
    "package.json": JSON.stringify({
      dependencies: { react: "^19.0.0", "react-dom": "^19.0.0" },
      devDependencies: { typescript: "^5.0.0", eslint: "^9.0.0" },
    }),
    "src/components/App.tsx": "export function App(){ return <main>Hello</main> }",
    ".github/workflows/ci.yml": "name: ci",
    "src/App.test.tsx": "test('app', () => {})",
  });

  const context = detect(dir);
  assert.ok(context.signals.includes("react"));
  assert.ok(context.signals.includes("frontend"));
  assert.ok(context.signals.includes("ci"));
  assert.ok(context.signals.includes("missing_error_boundary"));
  fs.rmSync(dir, { recursive: true, force: true });
});

test("ranks React Doctor and React Error Boundary for a React project", () => {
  const dir = fixture({
    "package.json": JSON.stringify({
      dependencies: { react: "^19.0.0", "react-dom": "^19.0.0" },
    }),
    "src/components/App.tsx": "export const App = () => <div />",
  });

  const result = analyze(dir, registry);
  const doctor = result.candidates.find((item) => item.id === "react-doctor");
  const boundary = result.candidates.find((item) => item.id === "react-error-boundary");
  assert.equal(doctor.selected, true);
  assert.equal(boundary.selected, true);
  fs.rmSync(dir, { recursive: true, force: true });
});

test("does not select React Error Boundary when a boundary is already present", () => {
  const dir = fixture({
    "package.json": JSON.stringify({
      dependencies: {
        react: "^19.0.0",
        "react-dom": "^19.0.0",
        "react-error-boundary": "^6.0.0",
      },
    }),
    "src/components/App.tsx": "export const App = () => <div />",
  });

  const result = analyze(dir, registry);
  const boundary = result.candidates.find((item) => item.id === "react-error-boundary");
  assert.equal(boundary.selected, false);
  fs.rmSync(dir, { recursive: true, force: true });
});

test("keeps discovery libraries as selective references", () => {
  const dir = fixture({
    "README.md": "# docs",
    "AGENTS.md": "# agent rules",
  });

  const result = analyze(dir, registry);
  const library = result.candidates.find((item) => item.id === "awesome-agent-skills");
  assert.equal(library.policy, "reference-only");
  assert.notEqual(library.action, "candidate");
  fs.rmSync(dir, { recursive: true, force: true });
});
