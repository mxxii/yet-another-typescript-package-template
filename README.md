# Yet another TypeScript package template

![test and lint status badge](https://github.com/mxxii/yet-another-typescript-package-template/workflows/test%20and%20lint/badge.svg)

This template is aimed for Node.js packages development.

This template is made with a goal to cover multiple useful tools. There is some redundancy - this is intentional. It is easier to remove unneeded parts than add missing parts.

## Node.js

As of November 2020, Node 10 is not too far from the end of it's LTS period and Node 12 is currently active. Decision was made to ignore Node versions prior to 12, since this is a starter for new packages.

<https://nodejs.org/en/about/releases/>

## Dual package

Up to date recommendations: <https://nodejs.org/api/packages.html#packages_dual_commonjs_es_module_packages>

This template assumes the library is going to be stateless.

## Bare tsc

All you need to get your TypeScript files transpiled to JavaScript is the TSC compiler that comes with the `typescript` package.

TSConfig reference: <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

`tsc` CLI: <https://www.typescriptlang.org/docs/handbook/compiler-options.html>

## rollup

`rollup` bundler makes it even easier in some cases.

Docs: <https://rollupjs.org/guide/en/>

TypeScript support is provided by the official plugin: <https://github.com/rollup/plugins/tree/master/packages/typescript/#readme>

Althernative TypeScript plugin with some extra features: <https://github.com/ezolenko/rollup-plugin-typescript2>

## Types bundling

There are multiple ways to bundle all types into a single `.d.ts` file.

<https://github.com/vytenisu/npm-dts> seems to be the nicest one. With a catch that the version `1.3.5` can't create the output directory when needed. Solved with `mkdirp` and I hope to be able to remove that soon.

Depending on your needs <https://github.com/SitePen/dts-generator>, <https://github.com/timocov/dts-bundle-generator> or <https://github.com/TypeStrong/dts-bundle> might also be options to consider.

## husky

Belt and braces. Extra hooks to run code checks before it can get to the repository.

Docs for v4: <https://github.com/typicode/husky/tree/master>

## eslint

ESlint with TypeScript plugin is currently the preferred way to lint `.ts` files.

Only recommended configs are included with the template. And only a couple of exceptions made for other tools.

Rules: <https://eslint.org/docs/rules/>

## prettier

Fast food of code formatting. Minimum decisions, quite wide range of supported file formats.

Options: <https://prettier.io/docs/en/options.html>

Prettier is basically unusable for json files. It is therefore disabled for those.

## eslint-plugin-jsonc

Apparently the most solid solution to lint and format JSON files. It reuses ESlint rules where appropriate.

Rules: <https://ota-meshi.github.io/eslint-plugin-jsonc/rules/>

## markdownlint

Rules: <https://github.com/DavidAnson/markdownlint/blob/main/README.md>

<https://github.com/DavidAnson/markdownlint-cli2> is more flexible all around, but with pretty inconvenient interface - any options can only be passed via second-order config file.

<https://github.com/igorshubovych/markdownlint-cli> is used instead, because there is some use for command line arguments.

## ava

TypeScript support via: <https://github.com/TypeStrong/ts-node>

More notes on TypeScript support: <https://github.com/avajs/ava/blob/master/docs/recipes/typescript.md>

Coverage support via: <https://github.com/istanbuljs/nyc>

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

## GitHub actions

Testing Node.js: <https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs>

Caching: <https://docs.github.com/en/free-pro-team@latest/actions/guides/caching-dependencies-to-speed-up-workflows>

## Badges

GitHub workflow status badge: <https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge>

GitHub currently doesn't provide badges for coverage.

List of coverage providers supported by Shields_io: <https://shields.io/category/coverage>

## Publishing

This part is left out for now. No good template solution can be provided yet.

## License

This repository is a mere template without own functionality, a configuration for external tools and libraries. And as such, it shouldn't be considered a subject of copyright. Instead, you are encouraged to copy it and apply the license of your choice to the product you build.
