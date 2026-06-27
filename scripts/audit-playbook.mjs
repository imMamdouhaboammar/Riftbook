import fs from 'fs';
import path from 'path';

// ANSI escape codes for coloring console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

const rootDir = '/Users/mamdouhaboammar/Documents/awsome-vibe-code/playbook';

// Helper to recursively walk directories
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

console.log(`${colors.bold}${colors.cyan}--- Starting Playbook Audit ---${colors.reset}\n`);

const allFiles = walk(rootDir);
const mdFiles = allFiles.filter(f => f.endsWith('.md'));
const svgFiles = allFiles.filter(f => f.endsWith('.svg'));

let totalErrors = 0;
let totalWarnings = 0;

function reportError(message) {
  totalErrors++;
  console.log(`  ${colors.red}[FAIL]${colors.reset} ${message}`);
}

function reportWarning(message) {
  totalWarnings++;
  console.log(`  ${colors.yellow}[WARN]${colors.reset} ${message}`);
}

function reportPass(message) {
  console.log(`  ${colors.green}[PASS]${colors.reset} ${message}`);
}

// -------------------------------------------------------------
// 1. Link & Image Asset Validation
// -------------------------------------------------------------
console.log(`${colors.bold}1. Checking relative links & image assets...${colors.reset}`);

const linkRegex = /\[([^\]]+)\]\((?!https?:\/\/|mailto:)([^)]+)\)/g;
const imgRegex = /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g;
const htmlImgRegex = /<img\s+[^>]*src=["'](?!https?:\/\/)([^"']+)["'][^>]*>/gi;

mdFiles.forEach(file => {
  const relativePath = path.relative(rootDir, file);
  if (relativePath.startsWith('templates/')) {
    return; // Skip templates for link integrity as they contain copy-paste placeholders
  }

  const rawContent = fs.readFileSync(file, 'utf8');
  // Strip code blocks to avoid false positives inside code examples
  const content = rawContent
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]+`/g, '');

  const relativeDir = path.dirname(file);
  const fileLabel = path.relative(rootDir, file);
  
  let match;
  
  // Verify Markdown links
  linkRegex.lastIndex = 0;
  while ((match = linkRegex.exec(content)) !== null) {
    const rawLink = match[2].split('#')[0].split('?')[0]; // Strip hashes and queries
    if (!rawLink) continue;
    
    const resolvedPath = path.resolve(relativeDir, rawLink);
    if (!fs.existsSync(resolvedPath)) {
      reportError(`In ${fileLabel}: Broken link -> "${match[2]}" (Resolved: ${path.relative(rootDir, resolvedPath)})`);
    }
  }
  
  // Verify Markdown images
  imgRegex.lastIndex = 0;
  while ((match = imgRegex.exec(content)) !== null) {
    const rawImg = match[2].split('#')[0].split('?')[0];
    if (!rawImg) continue;
    
    const resolvedPath = path.resolve(relativeDir, rawImg);
    if (!fs.existsSync(resolvedPath)) {
      reportError(`In ${fileLabel}: Missing image -> "${match[2]}" (Resolved: ${path.relative(rootDir, resolvedPath)})`);
    }
  }
  
  // Verify HTML images
  htmlImgRegex.lastIndex = 0;
  while ((match = htmlImgRegex.exec(content)) !== null) {
    const rawImg = match[1].split('#')[0].split('?')[0];
    if (!rawImg) continue;
    
    const resolvedPath = path.resolve(relativeDir, rawImg);
    if (!fs.existsSync(resolvedPath)) {
      reportError(`In ${fileLabel}: Missing HTML image -> "${match[1]}" (Resolved: ${path.relative(rootDir, resolvedPath)})`);
    }
  }
});

if (totalErrors === 0) {
  reportPass("All relative links and image assets resolved successfully.");
}
console.log();

// -------------------------------------------------------------
// 2. Getting Started Index Integrity & Orphans
// -------------------------------------------------------------
console.log(`${colors.bold}2. Checking Getting Started index & orphans...${colors.reset}`);

const gsReadme = path.join(rootDir, 'getting-started/README.md');
let gsLessonsInIndex = new Set();

if (fs.existsSync(gsReadme)) {
  const readmeContent = fs.readFileSync(gsReadme, 'utf8');
  // Match lesson links inside the getting-started README index table
  const tableLinkRegex = /\|\s*\d+\s*\|\s*\[[^\]]+\]\(\.\/([^)]+\.md)\)/g;
  let match;
  while ((match = tableLinkRegex.exec(readmeContent)) !== null) {
    gsLessonsInIndex.add(path.resolve(path.join(rootDir, 'getting-started'), match[1]));
  }
} else {
  reportError("playbook/getting-started/README.md is missing!");
}

// Verify every listed lesson exists
gsLessonsInIndex.forEach(lessonPath => {
  if (!fs.existsSync(lessonPath)) {
    reportError(`Getting Started README lists non-existing lesson: ${path.relative(rootDir, lessonPath)}`);
  }
});

// Check for orphans in getting-started directory
const gsFiles = fs.readdirSync(path.join(rootDir, 'getting-started'))
  .map(f => path.resolve(path.join(rootDir, 'getting-started'), f))
  .filter(f => f.endsWith('.md') && !f.endsWith('README.md'));

gsFiles.forEach(file => {
  const isLegacy = fs.readFileSync(file, 'utf8').trim().startsWith('# This Lesson Has Moved');
  if (!gsLessonsInIndex.has(file) && !isLegacy) {
    reportError(`Orphan Getting Started lesson found (not in index, and not marked legacy): ${path.relative(rootDir, file)}`);
  } else if (gsLessonsInIndex.has(file) && isLegacy) {
    reportError(`Legacy redirect lesson is mistakenly listed in the Getting Started index: ${path.relative(rootDir, file)}`);
  }
});

if (totalErrors === 0) {
  reportPass("Getting Started lessons are indexed and mapped with no non-legacy orphans.");
}
console.log();

// -------------------------------------------------------------
// 3. Duplicate Lesson Numbers (within same folder/section)
// -------------------------------------------------------------
console.log(`${colors.bold}3. Checking duplicate lesson numbers...${colors.reset}`);

const sections = ['getting-started', 'core-workflows', 'mistakes', 'stories'];

sections.forEach(sec => {
  const secDir = path.join(rootDir, sec);
  if (!fs.existsSync(secDir)) return;
  
  const files = fs.readdirSync(secDir).filter(f => f.endsWith('.md') && f !== 'README.md');
  const numberMap = new Map();
  
  files.forEach(f => {
    const filePath = path.join(secDir, f);
    const isLegacy = fs.readFileSync(filePath, 'utf8').trim().startsWith('# This Lesson Has Moved');
    if (isLegacy) return; // Skip legacy redirect files
    
    const prefixMatch = f.match(/^(\d+)-/);
    if (prefixMatch) {
      const num = prefixMatch[1];
      if (numberMap.has(num)) {
        reportError(`Duplicate lesson number "${num}" in section "${sec}": "${f}" and "${numberMap.get(num)}"`);
      } else {
        numberMap.set(num, f);
      }
    }
  });
});

if (totalErrors === 0) {
  reportPass("No duplicate lesson prefix numbers found within any sections.");
}
console.log();

// -------------------------------------------------------------
// 4. Lesson Layout Compliance Check
// -------------------------------------------------------------
console.log(`${colors.bold}4. Checking lesson layout & visual standards...${colors.reset}`);

// Canonical lessons are md files in the 4 folders (excluding READMEs and legacy redirects)
const lessonDirs = ['getting-started', 'core-workflows', 'mistakes', 'stories'];
const shipCheckDirs = ['getting-started', 'core-workflows']; // Only core lessons require Ship Check
let checkedLessons = 0;

mdFiles.forEach(file => {
  const relativePath = path.relative(rootDir, file);
  const pathParts = relativePath.split(path.sep);
  if (pathParts.length < 2) return; // Skip root README
  
  const section = pathParts[0];
  const filename = pathParts[1];
  
  if (!lessonDirs.includes(section) || filename === 'README.md') return;
  
  const content = fs.readFileSync(file, 'utf8').trim();
  const isLegacy = content.startsWith('# This Lesson Has Moved');
  if (isLegacy) return; // Skip legacy redirects
  
  checkedLessons++;
  
  // Checks:
  // a. Top hero image pointing to assets/lesson-heroes/
  const heroMatch = content.match(/!\[[^\]]*\]\([^)]*assets\/lesson-heroes\/[^)]+\.svg\)/i) ||
                    content.match(/<img\s+[^>]*src=["'][^"']*assets\/lesson-heroes\/[^"']+\.svg["']/i);
  if (!heroMatch) {
    reportError(`In ${relativePath}: Missing top Hero SVG card (must point to assets/lesson-heroes/)`);
  }
  
  // b. H1 title
  const h1Match = content.match(/^#\s+.+/m);
  if (!h1Match) {
    reportError(`In ${relativePath}: Missing H1 title ("# Lesson Title")`);
  }
  
  // c. Metadata table (headers: Level | Duration | Path | Prerequisites | Tools Mentioned)
  const metaTableMatch = content.match(/\|\s*Level\s*\|\s*Duration\s*\|\s*Path\s*\|\s*Prerequisites\s*\|\s*Tools\s*Mentioned\s*\|/i);
  if (!metaTableMatch) {
    reportError(`In ${relativePath}: Missing or malformed Metadata Table (Level | Duration | Path | Prerequisites | Tools Mentioned)`);
  }
  
  // d. Active Signals block
  const activeSignalsMatch = content.match(/###\s*Active\s*Signals\s*in\s*this\s*Lesson/i);
  if (!activeSignalsMatch) {
    reportError(`In ${relativePath}: Missing "### Active Signals in this Lesson" block`);
  }
  
  // e. Ship Check section (only required for canonical lessons, e.g. getting-started/core-workflows)
  if (shipCheckDirs.includes(section)) {
    const shipCheckMatch = content.match(/(##\s*Ship\s*Check|!\[SHIP CHECK\])/i);
    if (!shipCheckMatch) {
      reportError(`In ${relativePath}: Missing "Ship Check" section or shield`);
    }
  }
});

if (totalErrors === 0) {
  reportPass(`Layout compliance verified for all ${checkedLessons} canonical lessons.`);
}
console.log();

// -------------------------------------------------------------
// 5. Section README Header SVG Check
// -------------------------------------------------------------
console.log(`${colors.bold}5. Checking section README headers...${colors.reset}`);

const sectionReadmes = [
  'getting-started/README.md',
  'core-workflows/README.md',
  'mistakes/README.md',
  'stories/README.md',
  'paths/README.md'
];

sectionReadmes.forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const headerMatch = content.match(/<img\s+[^>]*src=["'][^"']*assets\/section-headers\/[^"']+\.svg["']/i) ||
                        content.match(/!\[[^\]]*\]\([^)]*assets\/section-headers\/[^)]+\.svg\)/i);
    if (!headerMatch) {
      reportError(`In ${relPath}: Missing Section Header SVG banner`);
    }
  } else {
    reportError(`Section README is missing: ${relPath}`);
  }
});

if (totalErrors === 0) {
  reportPass("All section READMEs contain correct section header SVGs.");
}
console.log();

// -------------------------------------------------------------
// Summary
// -------------------------------------------------------------
console.log(`${colors.bold}${colors.cyan}--- Audit Summary ---${colors.reset}`);
console.log(`Total Markdown Files Checked: ${mdFiles.length}`);
console.log(`Total SVG Files Checked:      ${svgFiles.length}`);
console.log(`Total Errors (FAIL):          ${colors.red}${totalErrors}${colors.reset}`);
console.log(`Total Warnings (WARN):        ${colors.yellow}${totalWarnings}${colors.reset}`);

if (totalErrors > 0) {
  console.log(`\n${colors.red}${colors.bold}Audit FAILED.${colors.reset} Please fix the errors listed above.\n`);
  process.exit(1);
} else {
  console.log(`\n${colors.green}${colors.bold}Audit PASSED.${colors.reset} Everything is compliant with the playbook standards!\n`);
  process.exit(0);
}
