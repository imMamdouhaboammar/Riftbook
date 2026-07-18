#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const defaultRegistry = path.resolve(scriptDir, "../integrations/registry.json");
const allowedPolicies = new Set([
  "project-local-auto",
  "conditional-auto",
  "dependency-auto",
  "manual-only",
  "reference-only",
]);

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function validateRegistry(registry) {
  const errors = [];
  const warnings = [];

  if (!isPlainObject(registry)) {
    return { valid: false, errors: ["Registry root must be a JSON object."], warnings };
  }

  if (typeof registry.schema_version !== "string" || !/^\d+\.\d+$/.test(registry.schema_version)) {
    errors.push("schema_version must use major.minor format, for example 1.0.");
  }

  if (typeof registry.updated !== "string" || Number.isNaN(Date.parse(`${registry.updated}T00:00:00Z`))) {
    errors.push("updated must be a valid YYYY-MM-DD date.");
  }

  if (!Array.isArray(registry.integrations) || registry.integrations.length === 0) {
    errors.push("integrations must be a non-empty array.");
    return { valid: false, errors, warnings };
  }

  const ids = new Set();
  const repos = new Set();
  const knownSignals = new Set();

  registry.integrations.forEach((integration, index) => {
    const prefix = `integrations[${index}]`;
    if (!isPlainObject(integration)) {
      errors.push(`${prefix} must be an object.`);
      return;
    }

    for (const field of ["id", "name", "repo", "category", "type", "policy"]) {
      if (typeof integration[field] !== "string" || integration[field].trim() === "") {
        errors.push(`${prefix}.${field} must be a non-empty string.`);
      }
    }

    if (typeof integration.id === "string") {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(integration.id)) {
        errors.push(`${prefix}.id must be lowercase kebab-case.`);
      }
      if (ids.has(integration.id)) errors.push(`Duplicate integration id: ${integration.id}.`);
      ids.add(integration.id);
    }

    if (typeof integration.repo === "string") {
      if (!/^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/.test(integration.repo)) {
        errors.push(`${prefix}.repo must be a canonical GitHub repository URL.`);
      }
      const normalizedRepo = integration.repo.replace(/\/$/, "").toLowerCase();
      if (repos.has(normalizedRepo)) errors.push(`Duplicate repository URL: ${integration.repo}.`);
      repos.add(normalizedRepo);
    }

    if (typeof integration.policy === "string" && !allowedPolicies.has(integration.policy)) {
      errors.push(`${prefix}.policy is not supported: ${integration.policy}.`);
    }

    if (integration.exclusive_group !== null &&
        (typeof integration.exclusive_group !== "string" || integration.exclusive_group.trim() === "")) {
      errors.push(`${prefix}.exclusive_group must be null or a non-empty string.`);
    }

    if (!isPlainObject(integration.selection)) {
      errors.push(`${prefix}.selection must be an object.`);
      return;
    }

    const { base_score: baseScore, threshold, signals } = integration.selection;
    if (!Number.isInteger(baseScore) || baseScore < 0 || baseScore > 10) {
      errors.push(`${prefix}.selection.base_score must be an integer from 0 to 10.`);
    }
    if (!Number.isInteger(threshold) || threshold < 1 || threshold > 20) {
      errors.push(`${prefix}.selection.threshold must be an integer from 1 to 20.`);
    }
    if (Number.isInteger(baseScore) && Number.isInteger(threshold) && baseScore >= threshold) {
      warnings.push(`${integration.id ?? prefix} is selected without any matched signal because base_score >= threshold.`);
    }
    if (!Array.isArray(signals) || signals.length === 0) {
      errors.push(`${prefix}.selection.signals must be a non-empty array.`);
    } else {
      const localSignals = new Set();
      signals.forEach((signal, signalIndex) => {
        if (typeof signal !== "string" || !/^[a-z0-9]+(?:_[a-z0-9]+)*$/.test(signal)) {
          errors.push(`${prefix}.selection.signals[${signalIndex}] must be lowercase snake_case.`);
          return;
        }
        if (localSignals.has(signal)) errors.push(`${prefix}.selection.signals contains duplicate signal: ${signal}.`);
        localSignals.add(signal);
        knownSignals.add(signal);
      });
    }
  });

  return { valid: errors.length === 0, errors, warnings, integrationCount: registry.integrations.length, signalCount: knownSignals.size };
}

function readRegistry(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`Cannot read registry ${filePath}: ${error.message}`);
  }
}

function report(result, filePath) {
  console.log(`Integration registry: ${filePath}`);
  console.log(`Integrations: ${result.integrationCount ?? 0}`);
  console.log(`Unique signals: ${result.signalCount ?? 0}`);
  for (const warning of result.warnings) console.warn(`warning: ${warning}`);
  for (const error of result.errors) console.error(`error: ${error}`);
  console.log(result.valid ? "Registry validation passed." : "Registry validation failed.");
}

export { allowedPolicies, validateRegistry };

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const filePath = path.resolve(process.argv[2] ?? defaultRegistry);
  try {
    const result = validateRegistry(readRegistry(filePath));
    report(result, filePath);
    if (!result.valid) process.exitCode = 1;
  } catch (error) {
    console.error(`registry-validator: ${error.message}`);
    process.exitCode = 1;
  }
}
