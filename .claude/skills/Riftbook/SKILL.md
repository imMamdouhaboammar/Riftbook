```markdown
# Riftbook Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns, coding conventions, and collaborative workflows used in the Riftbook Python codebase. You'll learn how to structure files, write imports and exports, contribute new features, and integrate repository checks, as well as how to write and organize tests. This guide is ideal for both new and experienced contributors aiming for consistency and quality in Riftbook development.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userProfile.py`, `dataFetcher.py`

### Import Style
- Use **relative imports** within the package.
  - Example:
    ```python
    from .utils import parseData
    from ..models import User
    ```

### Export Style
- Use **named exports** (explicitly define what is exported).
  - Example:
    ```python
    def fetchData():
        pass

    __all__ = ['fetchData']
    ```

## Workflows

### Add New GitHub Issue Template
**Trigger:** When you want to introduce a new structured issue template for the repository  
**Command:** `/new-issue-template`

1. Create a new YAML file in `.github/ISSUE_TEMPLATE/`
2. Define the structure and fields for the template
   - Example:
     ```yaml
     name: Bug Report
     description: Report a bug to help us improve
     labels: [bug]
     body:
       - type: input
         id: summary
         attributes:
           label: Bug Summary
           description: Briefly describe the bug
     ```
3. Commit and push the new template to the repository

### Implement and Integrate New Repository Checker
**Trigger:** When you want to introduce a new automated check for repository content quality  
**Command:** `/new-repo-checker`

1. Add a new checker script in `scripts/`
   - Example: `scripts/repoQualityChecker.py`
2. Write corresponding tests in `tests/`
   - Example: `tests/repoQualityChecker.test.py`
3. Integrate the checker into GitHub Actions by adding a workflow YAML in `.github/workflows/`
   - Example:
     ```yaml
     name: Repo Quality Check
     on: [push, pull_request]
     jobs:
       check:
         runs-on: ubuntu-latest
         steps:
           - uses: actions/checkout@v2
           - name: Run Quality Checker
             run: python scripts/repoQualityChecker.py
     ```
4. Commit and push all related files

## Testing Patterns

- Test files use the pattern `*.test.*` (e.g., `feature.test.py`)
- The testing framework is **unknown**, but tests are placed in the `tests/` directory
- Example test file:
  ```python
  # tests/dataFetcher.test.py
  from ..scripts.dataFetcher import fetchData

  def test_fetch_data_returns_expected():
      result = fetchData()
      assert result is not None
  ```

## Commands

| Command              | Purpose                                                         |
|----------------------|-----------------------------------------------------------------|
| /new-issue-template  | Create and add a new GitHub issue template                      |
| /new-repo-checker    | Implement and integrate a new repository quality checker script  |
```
