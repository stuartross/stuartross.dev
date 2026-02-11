<!--
Sync Impact Report
===================
Version change: N/A (initial) → 1.0.0
Added principles:
  - I. Simplicity First
  - II. Test at Boundaries
  - III. Ship Incrementally
Added sections:
  - Technology Constraints
  - Development Workflow
  - Governance
Removed sections: None
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ no updates needed
    (Constitution Check section is generic; principles are
    referenced dynamically)
  - .specify/templates/spec-template.md ✅ no updates needed
    (spec template is technology-agnostic by design)
  - .specify/templates/tasks-template.md ✅ no updates needed
    (task phases and structure are compatible)
  - .specify/templates/agent-file-template.md ✅ no updates needed
  - .specify/templates/checklist-template.md ✅ no updates needed
Follow-up TODOs: None
-->

# claude-01 Constitution

## Core Principles

### I. Simplicity First

Every decision MUST favor the simplest viable solution.

- No abstractions until a pattern repeats three or more times.
- No feature flags, configuration layers, or indirection unless
  the current task explicitly requires them.
- YAGNI: do not build for hypothetical future requirements.
- When choosing between two approaches of equal correctness,
  pick the one with fewer moving parts.
- Complexity MUST be justified in writing (in a PR description
  or plan document) before it is introduced.

**Rationale**: Premature abstraction and speculative design are
the primary sources of accidental complexity. Keeping the
codebase small and direct makes it easier to understand, modify,
and debug.

### II. Test at Boundaries

Testing effort MUST concentrate on system boundaries—user input,
API contracts, and external integrations—rather than internal
implementation details.

- Every public API endpoint MUST have at least one contract test
  covering its happy path and one error path.
- Integration tests MUST cover cross-service or cross-module
  communication where data crosses a trust boundary.
- Unit tests are welcome but MUST NOT test private functions or
  implementation internals that have no independent contract.
- Mocks MUST only replace external systems (databases, third-party
  APIs); never mock internal modules.

**Rationale**: Boundary tests catch the failures users actually
experience while remaining resilient to internal refactoring.
Over-testing internals creates friction without proportional
safety.

### III. Ship Incrementally

Features MUST be delivered in small, independently deployable
increments that each provide user-visible value.

- Every pull request MUST be deployable on its own without
  breaking existing functionality.
- Work MUST be sliced by user story, not by technical layer.
- Each increment MUST be demonstrable: if you cannot show it
  working, it is not done.
- Long-lived feature branches (>3 days without merge) MUST be
  avoided; prefer feature flags or progressive disclosure only
  when incremental delivery is truly impossible.

**Rationale**: Small, frequent deliveries reduce integration
risk, shorten feedback loops, and ensure the project always has
a working, shippable artifact.

## Technology Constraints

- **Language**: TypeScript (strict mode enabled).
- **Runtime**: Node.js (LTS).
- **Package manager**: npm (lock file committed).
- **Linting**: ESLint with recommended + strict TypeScript rules.
- **Formatting**: Prettier (default configuration).
- **Build**: Keep the build pipeline as simple as the project
  allows; avoid multi-tool orchestration unless justified per
  Principle I.

## Development Workflow

- **Branching**: Feature branches off `main`; short-lived.
- **Pull requests**: Every change goes through a PR. PR
  descriptions MUST state what changed and why.
- **Code review**: At least one approval required before merge.
- **CI**: All tests and linting MUST pass before merge.
- **Commits**: Conventional Commits format
  (`type: short description`). Prefer small, atomic commits.

## Governance

This constitution is the authoritative guide for all
development decisions in the claude-01 project. When a practice
conflicts with this document, this document wins.

- **Amendments**: Any change to this constitution MUST be
  proposed in a PR with a clear rationale. The amendment MUST
  update the version number and `Last Amended` date.
- **Versioning**: MAJOR for principle removals or redefinitions;
  MINOR for new principles or material expansions; PATCH for
  wording clarifications.
- **Compliance**: Every PR review MUST verify that changes
  comply with the Core Principles. Violations MUST be flagged
  and resolved before merge.

**Version**: 1.0.0 | **Ratified**: 2026-02-08 | **Last Amended**: 2026-02-08
