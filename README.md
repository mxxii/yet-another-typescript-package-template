# Yet another TypeScript package template

![lint status badge](https://github.com/mxxii/yet-another-typescript-package-template/workflows/lint/badge.svg)
![test status badge](https://github.com/mxxii/yet-another-typescript-package-template/workflows/test/badge.svg)
[![codecov badge](https://codecov.io/gh/mxxii/yet-another-typescript-package-template/branch/main/graph/badge.svg?token=OQQ500N8HC)](https://codecov.io/gh/mxxii/yet-another-typescript-package-template)
[![Open in Visual Studio Code](https://img.shields.io/badge/Open_in-Visual_Studio_Code-007acc)](https://open.vscode.dev/mxxii/yet-another-typescript-package-template)

This template is aimed for Node.js packages development.

## Node.js

Node 20 is the target version.

<https://nodejs.org/en/about/releases/>

## Dual package

Up to date recommendations: <https://nodejs.org/api/packages.html#packages_dual_commonjs_es_module_packages>

This template assumes the library is going to be stateless.

## Exports `./package.json`

Some tooling in downstream packages might need this.

See <https://github.com/nodejs/node/issues/33460> and <https://github.com/tsmodule/tsmodule/issues/1>.

## TSConfig

TSConfig reference: <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

## rollup

`rollup` bundler allows certain things that [`tsc` CLI](https://www.typescriptlang.org/docs/handbook/compiler-options.html) doesn't, such as more flexible output files naming - this is a must for a dual package.

Docs: <https://rollupjs.org/guide/en/>

TypeScript support is provided by the official plugin: <https://github.com/rollup/plugins/tree/master/packages/typescript/#readme>

Alternative TypeScript plugin with some extra features: <https://github.com/ezolenko/rollup-plugin-typescript2>

## concurrently

[Concurrently](https://github.com/open-cli-tools/concurrently) is a substitute for `npm-run-all` that is not abandoned.

Sequential run can be achieved with `-m 1` arg.

There is also this fork of `npm-run-all` that receives package updates: <https://github.com/bcomnes/npm-run-all2>

## eslint

ESlint with TypeScript plugin is currently the preferred way to lint `.ts` files.

Only recommended configs are included with the template, with a minimal set of overrides (same applies to all linting tools).

Rules: <https://eslint.org/docs/rules/> and <https://eslint.style/rules>

Various plugins can conflict with each other so it's a good idea to usee `overrides` in `.eslintrc.json` to keep configuration for different file types separate.

Separate `tsconfig.eslint.json` file allows to lint test files.

## tsdoc

TSDoc: <https://tsdoc.org/>

ESlint plugin: <https://tsdoc.org/pages/packages/eslint-plugin-tsdoc/>

## typedoc

Generate API documentation in the `/docs` folder based on code and TSDoc comments.

TypeDoc: <https://typedoc.org/>

Markdown plugin: <https://github.com/tgreyuk/typedoc-plugin-markdown> (became more powerful in version 4).

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

My test framework of choice. Macros and snapshots are pleasure to work with in AVA. Jest often causes various troubles.

TypeScript support via <https://github.com/bloomberg/ts-blank-space>. It is a type stripper/eraser. Some limitations may apply. Should be perfect with the new `--erasableSyntaxOnly` flag.

If `ts-blank-space` can't be used, there are <https://github.com/tapjs/tsimp> (with [known issue](https://github.com/avajs/ava/issues/3349)) and <https://github.com/TypeStrong/ts-node> (might still work but with own quirks).

`ts-blank-space` is [currently missing](https://github.com/bloomberg/ts-blank-space/issues/28) CLI support, so `tsimp` has to be kept for scripts.

More notes on TypeScript support: <https://github.com/avajs/ava/blob/master/docs/recipes/typescript.md>

## expect-type

`tsd` is the most known tool for type tests but turns out it is rather opinionated and has some limitations.

<https://github.com/mmkal/expect-type> seems to be a better alternative.

A common observation about type testing: it is not well compatible with unit testing. The best approach I see is to keep it separate and just run `tsc --noEmit` over it.

## iso-bench

<https://github.com/Llorx/iso-bench> seems to be a benchmarking library that is most alive and reliable. Benny is simply dead by now and has unresolved issues.

## onchange

Many tools come with their own watchers, others don't. <https://github.com/Qard/onchange> seems to be the most straightforward solution to add this feature where it is missing.

<https://github.com/M-Zuber/npm-watch> might be a suitable alternative in some cases.

## GitHub actions

- <https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs>
- <https://github.com/actions/setup-node>

## Badges

GitHub workflow status badge: <https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge>

## Coverage

GitHub itself currently doesn't provide badges for coverage. But coverage data can be sent to an external service. For some of them it is as easy as using a ready-made action.

List of coverage providers supported by Shields_io: <https://shields.io/category/coverage>

Codecov seems to be the most practical one. <https://about.codecov.io/for/open-source/>

<https://github.com/bcoe/c8> is used for coverage reports generation with AVA and Mocha. More on c8: <https://medium.com/the-node-js-collection/rethinking-javascript-test-coverage-5726fb272949>.

## Dependencies

[Depfu](https://depfu.com/) seems to be useful as a display for the state of dependencies. But their "reasonably up-to-date" policy - a feature that should make their product more pleasing to use - doesn't seem to work as expected and appears way too "lazy".

Dependabot is a part of GitHub now, it delivers security updates automatically and can be configured to create regular dependency updates. Among the list of package managers such as npm it also has Github Actions. [Documentation](https://docs.github.com/en/code-security/supply-chain-security/about-dependabot-version-updates).

<https://github.com/dylang/npm-check> is a handy tool when you need to manage deps manually. It is meant to be installed globally though, so it's only mentioned here.

<https://marketplace.visualstudio.com/items?itemName=idered.npm> extension for VSCode had a good premise but seems to be dropped half-baked. I only use it now to quickly see the list of available versions for some packages.

<https://marketplace.visualstudio.com/items?itemName=codeandstuff.package-json-upgrade> extension for VSCode is currently the most helpful tool for me to update dependencies.

## Publishing

This part is left out for now. No good template solution can be provided yet.

## License

This repository is a mere template without own functionality, a configuration for external tools and libraries. And as such, it shouldn't be considered a subject of copyright. Instead, you are encouraged to copy it and apply the license of your choice to the product you build.
