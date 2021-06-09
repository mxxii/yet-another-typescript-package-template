# Yet another TypeScript package template

![lint status badge](https://github.com/mxxii/yet-another-typescript-package-template/workflows/lint/badge.svg)
![test status badge](https://github.com/mxxii/yet-another-typescript-package-template/workflows/test/badge.svg)
[![codecov badge](https://codecov.io/gh/mxxii/yet-another-typescript-package-template/branch/main/graph/badge.svg?token=OQQ500N8HC)](https://codecov.io/gh/mxxii/yet-another-typescript-package-template)
[![depfu dependencies status badge](https://badges.depfu.com/badges/a4c7ba19a3af3a387a1a7dd3ef61aee4/overview.svg)](https://depfu.com/github/mxxii/yet-another-typescript-package-template?project_id=18000)

This template is aimed for Node.js packages development.

This template is made with a goal to cover multiple useful tools. There is some redundancy - this is intentional. It is easier to remove unneeded parts than add missing parts.

## Node.js

Node 12 is the target version.

<https://nodejs.org/en/about/releases/>

## Dual package

Up to date recommendations: <https://nodejs.org/api/packages.html#packages_dual_commonjs_es_module_packages>

This template assumes the library is going to be stateless.

## TSConfig

TSConfig reference: <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

## rollup

`rollup` bundler allows certain things that [`tsc` CLI](https://www.typescriptlang.org/docs/handbook/compiler-options.html) doesn't, such as more flexible output files naming - this is a must for a dual package.

Docs: <https://rollupjs.org/guide/en/>

TypeScript support is provided by the official plugin: <https://github.com/rollup/plugins/tree/master/packages/typescript/#readme>

Althernative TypeScript plugin with some extra features: <https://github.com/ezolenko/rollup-plugin-typescript2>

## concurrently

[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is the closest substitute for `npm-run-all` that is not abandoned.

Sequential run can be achieved with `-m 1` arg.

There is also this fork of `npm-run-all` that receives package updates: <https://github.com/bcomnes/npm-run-all2>

## eslint

ESlint with TypeScript plugin is currently the preferred way to lint `.ts` files.

Only recommended configs are included with the template, with a minimal set of overrides (same applies to all linting tools).

Rules: <https://eslint.org/docs/rules/>

Various plugins can conflict with each other so it's a good idea to usee `overrides` in `.eslintrc.json` to keep configuration for different file types separate.

Separate `tsconfig.eslint.json` file allows to lint test files.

## tsdoc

TSDoc: <https://tsdoc.org/>

ESlint plugin: <https://tsdoc.org/pages/packages/eslint-plugin-tsdoc/>

## typedoc

Generate API documentation in the `/docs` folder based on code and TSDoc comments.

TypeDoc: <https://typedoc.org/>

Markdown plugin: <https://github.com/tgreyuk/typedoc-plugin-markdown>

## prettier

Fast food of code formatting. Minimum decisions, quite wide range of supported file formats.

Options: <https://prettier.io/docs/en/options.html>

Prettier is basically unusable for json files. It is therefore disabled for those.

## eslint-plugin-jsonc

Apparently the most solid solution to lint and format JSON files. It reuses ESlint rules where appropriate. Not all defaults play nicely with all configs though, so a couple of overrides is provided.

Rules: <https://ota-meshi.github.io/eslint-plugin-jsonc/rules/>

## markdownlint

Rules: <https://github.com/DavidAnson/markdownlint/blob/main/README.md>

<https://github.com/DavidAnson/markdownlint-cli2> seems to be a better CLI all around at this point.

<https://github.com/igorshubovych/markdownlint-cli> followed more conventional approach but is not going to receive future improvements.

## ava

TypeScript support via: <https://github.com/TypeStrong/ts-node>

More notes on TypeScript support: <https://github.com/avajs/ava/blob/master/docs/recipes/typescript.md>

Coverage support via: <https://github.com/istanbuljs/nyc>

Macros and snapshots are pleasure to work with in AVA.

## jest

TypeScript support via: <https://github.com/kulshekhar/ts-jest>

Alternative with Babel: <https://jestjs.io/docs/en/getting-started#using-typescript>

The most popular testing framework nowadays, but often feels like a victim of it's own size and popularity. Got some unexpected behavior in terms of configuration when preparing this template.

## mocha

TypeScript support via: <https://github.com/TypeStrong/ts-node>

Coverage support via: <https://github.com/istanbuljs/nyc>

Can use any assertion libraries: <https://mochajs.org/#assertions>, this template just uses <https://nodejs.org/api/assert.html>.

## onchange

Many tools come with their own watchers, others don't. <https://github.com/Qard/onchange> seems to be the most straightforward solution to add this feature where it is missing.

<https://github.com/M-Zuber/npm-watch> might be a suitable alternative in some cases.

## GitHub actions

Testing Node.js: <https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs>

Caching: <https://docs.github.com/en/free-pro-team@latest/actions/guides/caching-dependencies-to-speed-up-workflows>

## Badges

GitHub workflow status badge: <https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge>

## Coverage

GitHub itself currently doesn't provide badges for coverage. But coverage data can be sent to an external service. For some of them it is as easy as using a ready-made action.

List of coverage providers supported by Shields_io: <https://shields.io/category/coverage>

Codecov seems to be the most practical one.

## Dependencies

List of dependency trackers supported by Shields_io: <https://shields.io/category/dependencies>

Depfu seems to be well working and useful.

Dependabot is a part of GitHub now, it delivers security updates automatically and can be configured to do more. Good alternative.

<https://github.com/dylang/npm-check> is a handy tool when you need to manage deps manually. It is meant to be installed globally though, so it's only mentioned here.

## Publishing

This part is left out for now. No good template solution can be provided yet.

## License

This repository is a mere template without own functionality, a configuration for external tools and libraries. And as such, it shouldn't be considered a subject of copyright. Instead, you are encouraged to copy it and apply the license of your choice to the product you build.
