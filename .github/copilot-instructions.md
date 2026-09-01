GitHub Copilot Instructions — Student Management Application
Project

We are building a Student Management web application using:

React
Vite
JavaScript
CSS
Git and GitHub

The application will initially use client-side state/local storage. A backend API and database may be added later.

The developer is learning React and GitHub Copilot, so generated code must be understandable and beginner-friendly.

Development Workflow

For every feature, follow this workflow:

PLAN → REVIEW → APPROVAL → IMPLEMENT → VALIDATE → COMMIT → PUSH

1. PLAN

Before implementing a feature:

Clearly identify the feature.
Describe what files/components need to change.
Define what is explicitly out of scope.
Identify dependencies and potential risks.
Define acceptance criteria.
Do not modify files during planning.
2. REVIEW

Before implementation:

Review the proposed approach.
Prefer the simplest appropriate solution.
Identify possible bugs, edge cases, and architectural concerns.
Avoid unnecessary abstractions and premature optimization.
Consider whether the proposed change could affect existing functionality.
Do not modify files during review.
3. APPROVAL

Do not implement a planned feature until the developer explicitly approves the plan.

An explicit approval may be:

"Approved"
"Proceed"
"Implement"

Do not interpret questions or discussion as approval.

4. IMPLEMENT

After approval:

Implement only the approved feature.
Modify only the necessary files.
Do not rewrite unrelated working code.
Do not add unrelated features.
Do not perform unnecessary refactoring.
Preserve existing functionality.
Keep React components small and understandable.
Prefer clear code over clever code.
Explain significant code changes when requested.
5. VALIDATE

After implementation:

Verify the application builds successfully.
Test the feature against the agreed acceptance criteria.
Check that existing functionality still works.
Check common edge cases.
Fix only issues related to the approved feature.
If a problem occurs, diagnose the cause before making broad changes.

Do not consider a feature complete until validation succeeds.

6. COMMIT

After successful validation:

Create a focused Git commit.
Do not combine unrelated changes into one commit.
Use a clear commit message.

Prefer Conventional Commit style, for example:

feat: add course field to student form

fix: validate student email

refactor: extract student form component

7. PUSH

Push changes to GitHub only after:

Implementation is complete.
Validation succeeds.
The changes have been committed.
There are no unintended changes.

Never force-push unless explicitly requested.

React Guidelines
Use functional components.
Use React hooks appropriately.
Use useState for local component state when appropriate.
Do not mutate React state directly.
Prefer immutable state updates.
Use meaningful component, variable, and function names.
Keep JSX readable.
Use .map() with stable keys when rendering lists.
Avoid unnecessary useEffect.
Avoid unnecessary state.
Extract reusable components when there is a clear benefit.
Do not introduce complex state-management libraries unless requested.
Code Quality
Follow existing project conventions.
Keep code simple and readable.
Avoid duplicated logic where practical.
Handle user input safely.
Add validation where required by the feature.
Avoid hard-coded values when they should be configurable.
Do not introduce dependencies unless necessary.
Explain why a new dependency is needed before adding it.
Learning Mode

The developer is learning React and GitHub Copilot.

When introducing a new React concept:

Explain the concept briefly.
Explain why it is needed.
Show or implement the smallest useful example.
Avoid generating large amounts of unrelated code.

When asked to explain code:

Explain the purpose first.
Explain important lines or concepts.
Use simple examples.
Do not modify files unless explicitly requested.
Copilot Usage Efficiency

The developer uses GitHub Copilot Free.

Therefore:

Keep prompts focused.
Avoid unnecessarily large responses.
Avoid regenerating existing code.
Avoid rewriting complete files when a small change is sufficient.
Reuse existing components and logic when appropriate.
Prefer targeted edits.
Do not generate multiple features in one request.
Do not create unnecessary files.
Do not add libraries without a clear need.
Ask for clarification when requirements are ambiguous.
Scope Control

For each approved feature:

Implement only that feature.
Do not silently add future features.
Do not change architecture without discussing it first.
Do not replace working code merely because another approach is possible.
If a significant architectural change appears necessary, stop and explain the issue before implementing it.
Security
Never hard-code passwords, API keys, tokens, or other secrets.
Never commit secrets to Git.
Validate user input where appropriate.
Do not disable security mechanisms merely to make an error disappear.
Explain security implications of authentication, authorization, database, or API changes.
Important Rule

When requirements are unclear or a change could significantly affect the existing application:

STOP and ask for clarification instead of making assumptions.

The developer remains responsible for approving changes before implementation.