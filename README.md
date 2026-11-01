# recrutement-new-version

## Code quality

Install workspace dependencies from the repository root with `pnpm install`.
The repository uses pnpm 10.28.2, as specified in `package.json`.
Use a Node.js version supported by ESLint 10: `^20.19.0 || ^22.13.0 || >=24`.

| Command                           | Purpose                                                         |
| --------------------------------- | --------------------------------------------------------------- |
| `pnpm lint`                       | Check JavaScript, TypeScript, and TSX throughout the workspace  |
| `pnpm lint:fix`                   | Apply available ESLint fixes                                    |
| `pnpm format`                     | Format supported source, configuration, and documentation files |
| `pnpm format:check`               | Check formatting without changing files                         |
| `pnpm --filter @apps/admin lint`  | Check only the admin app                                        |
| `pnpm --filter @packages/ui lint` | Check only the shared UI package                                |

The root `eslint.config.mjs` loads the shared base rules from
`@packages/config/eslint`, applies `@packages/config/eslint/react` to frontend
sources, and applies `@packages/config/eslint/node` to backend sources and
configuration files. Workspace lint scripts find this root configuration
automatically. Empty packages can run lint before they contain source files.

The base enables ESLint and TypeScript recommended checks. Unused variables and
imports are warnings; names starting with `_` can mark intentionally unused
values. React Hooks rules apply to the admin app, candidate app, and UI package.
Formatting rules that conflict with Prettier are disabled by
`eslint-config-prettier`.

The root `prettier.config.mjs` re-exports `@packages/config/prettier`.
The shared style uses two-space indentation, double quotes, semicolons,
trailing commas, a 100-character print width, and LF line endings.

Generated output, dependency directories, caches, and coverage are excluded.
Prettier also skips generated pnpm lockfiles. ESLint and Prettier run separately:
ESLint checks code quality, and Prettier handles formatting.
