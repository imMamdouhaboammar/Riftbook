import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { validateRegistry } from "./validate-integration-registry.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const registry = JSON.parse(
  fs.readFileSync(path.resolve(scriptDir, "../integrations/registry.json"), "utf8"),
);

function validIntegration(overrides = {}) {
  return {
    id: "sample-tool",
    name: "Sample Tool",
    repo: "https://github.com/example/sample-tool",
    category: "quality-review",
    type: "CLI",
    policy: "project-local-auto",
    exclusive_group: null,
    selection: {
      base_score: 2,
      signals: ["tests"],
      threshold: 4,
    },
    ...overrides,
  };
}

function validRegistry(integrations = [validIntegration()]) {
  return {
    schema_version: "1.0",
    updated: "2026-07-18",
    integrations,
  };
}

test("accepts the checked-in registry", () => {
  const result = validateRegistry(registry);
  assert.equal(result.valid, true, result.errors.join("\n"));
  assert.equal(result.integrationCount, 37);
  assert.ok(result.signalCount > 20);
});

test("rejects duplicate ids and repositories", () => {
  const first = validIntegration();
  const second = validIntegration({ name: "Second Tool" });
  const result = validateRegistry(validRegistry([first, second]));
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.includes("Duplicate integration id")));
  assert.ok(result.errors.some((error) => error.includes("Duplicate repository URL")));
});

test("rejects unsupported policy and malformed GitHub URL", () => {
  const integration = validIntegration({
    policy: "install-everywhere",
    repo: "https://example.com/tool",
  });
  const result = validateRegistry(validRegistry([integration]));
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.includes("policy is not supported")));
  assert.ok(result.errors.some((error) => error.includes("canonical GitHub repository URL")));
});

test("rejects invalid scoring and signal fields", () => {
  const integration = validIntegration({
    selection: {
      base_score: 11,
      threshold: 0,
      signals: ["Not Valid", "tests", "tests"],
    },
  });
  const result = validateRegistry(validRegistry([integration]));
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.includes("base_score")));
  assert.ok(result.errors.some((error) => error.includes("threshold")));
  assert.ok(result.errors.some((error) => error.includes("lowercase snake_case")));
  assert.ok(result.errors.some((error) => error.includes("duplicate signal")));
});

test("warns when a candidate needs no matching signal", () => {
  const integration = validIntegration({
    selection: {
      base_score: 5,
      threshold: 5,
      signals: ["tests"],
    },
  });
  const result = validateRegistry(validRegistry([integration]));
  assert.equal(result.valid, true);
  assert.equal(result.warnings.length, 1);
  assert.match(result.warnings[0], /selected without any matched signal/);
});

test("rejects malformed registry metadata", () => {
  const result = validateRegistry({
    schema_version: "v1",
    updated: "not-a-date",
    integrations: [],
  });
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.includes("schema_version")));
  assert.ok(result.errors.some((error) => error.includes("updated")));
  assert.ok(result.errors.some((error) => error.includes("non-empty array")));
});
