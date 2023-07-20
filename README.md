# typescript-template

![build status](https://github.com/mykaelog/typescript-template/workflows/build/badge.svg)

TypeScript template repository with standard-with-typescript and ts-node.

Dependabot keeps the dependencies up to date.

- **Build tool**: yarn
- **Target Node version**: 18.x (es2023)
- **Structure**: `src/` for TypeScript source files and `dist/` for output

Scripts:

- `yarn dev` run from source, auto-restarting
- `yarn lint` run eslint
- `yarn lint --fix` run eslint with auto-formatting
- `yarn start:dev` run built TS
- `yarn start:prod` run compiled TS
- `yarn build` build to JS
- `yarn test` run test
- `yarn test:watch` run test and watch
- `yarn test:coverage` run test collect coverage
