# Yet another TypeScript package template

![lint status badge](https://github.com/mxxii/yet-another-typescript-package-template/workflows/lint/badge.svg)
![test status badge](https://github.com/mxxii/yet-another-typescript-package-template/workflows/test/badge.svg)
![test coverage badge](https://img.shields.io/nycrc/mxxii/yet-another-typescript-package-template?config=.c8rc.json)
[![Open in Visual Studio Code](https://img.shields.io/badge/Open_in-Visual_Studio_Code-007acc)](https://open.vscode.dev/mxxii/yet-another-typescript-package-template)

This template is aimed for Node.js packages development.

In practice, this is mostly a playground to try out various infrastructure tools.


## Package configuration

### Node.js

Node 20 is the target version.

<https://nodejs.org/en/about/releases/>

### Dual package

Up to date recommendations: <https://nodejs.org/api/packages.html#packages_dual_commonjs_es_module_packages>

This template assumes the library is going to be stateless.

### Exports `./package.json`

Some tooling in downstream packages might need this.

See <https://github.com/nodejs/node/issues/33460> and <https://github.com/tsmodule/tsmodule/issues/1>.


## TypeScript language

### TSConfig

TSConfig reference: <https://www.typescriptlang.org/docs/handbook/tsconfig-json.html>

It is probably a good idea to start new projects with [`--erasableSyntaxOnly`](https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly) regardless of Node version, so the option is included in `tsconfig.json`. It also ensures compatibility with `ts-blank-space` loader (see below under Testing and benchmarking).

### tsdoc

TSDoc: <https://tsdoc.org/>

ESlint plugin: <https://tsdoc.org/pages/packages/eslint-plugin-tsdoc/>

### typedoc

Generate API documentation in the `/docs` folder based on code and TSDoc comments.

TypeDoc: <https://typedoc.org/>

Markdown plugin: <https://github.com/tgreyuk/typedoc-plugin-markdown> (became more powerful in version 4).

### `@arethetypeswrong/cli`

Quirky export resolution algorithms require to provide separate type definition files. This tool helps to validate type exports of a package.

Docs: <https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/packages/cli/README.md>

Additional note: TypeScript export resolution [quirk](https://github.com/microsoft/TypeScript/issues/50762) can cause an issue in complex cases. Can be avoided by keeping `types` implicitly resolvable or defined _before_ `default` export.


## Bundling

### rollup

`rollup` bundler allows certain things that [`tsc` CLI](https://www.typescriptlang.org/docs/handbook/compiler-options.html) doesn't, such as more flexible output files naming - this is a must for a dual package.

Docs: <https://rollupjs.org/guide/en/>

TypeScript support is provided by the official plugin: <https://github.com/rollup/plugins/tree/master/packages/typescript/#readme>

Alternative TypeScript plugin with some extra features: <https://github.com/ezolenko/rollup-plugin-typescript2>

Type definition files are build with <https://github.com/Swatinem/rollup-plugin-dts>.

Another plugin, <https://github.com/vladshcherbin/rollup-plugin-delete>, might be needed for cleanup of unnecessary generated files.

### pkgroll

"Zero-configuration" wrapper around `rollup` and `esbuild` that seems to do just what is needed based on `package.json` alone.

Docs: <https://github.com/privatenumber/pkgroll>

Yet to see how it holds up in more complicated cases. Waits for a PR to update a vulnerable dependency - doesn't instill confidence...


## Testing and benchmarking

### ava

My test framework of choice. Macros and snapshots are pleasure to work with in AVA. Jest often causes various troubles.

TypeScript support via <https://github.com/bloomberg/ts-blank-space>. It is a type stripper/eraser. Some limitations may apply. Should be perfect with the new `--erasableSyntaxOnly` flag.

If `ts-blank-space` can't be used, there are <https://github.com/tapjs/tsimp> (with [known issue](https://github.com/avajs/ava/issues/3349)) and <https://github.com/TypeStrong/ts-node> (might still work but with own quirks).

More notes on TypeScript support: <https://github.com/avajs/ava/blob/master/docs/recipes/typescript.md>

### expect-type

`tsd` is the most known tool for type tests but turns out it is rather opinionated and has some limitations.

<https://github.com/mmkal/expect-type> seems to be a better alternative.

A common observation about type testing: it is not well compatible with unit testing. The best approach I see is to keep it separate and just run `tsc --noEmit` over it.

### iso-bench

<https://github.com/Llorx/iso-bench> seems to be a benchmarking library that is most alive and reliable. Benny is simply dead by now and has unresolved issues.


## Linting

### eslint

ESlint with TypeScript plugin is currently the preferred way to lint `.ts` files.

Only recommended configs are included with the template, with a minimal set of overrides (same applies to all linting tools).

Rules: <https://eslint.org/docs/rules/>, <https://eslint.style/rules> and <https://typescript-eslint.io/rules/>

Separate `tsconfig.eslint.json` file allows to lint infrastructure files such as tests.

In order to use `eslint.config.ts` (TypeScript config file) with Node, additional explicit dependency is needed - <https://github.com/unjs/jiti>. It doesn't seem to function properly as a drop-in replacement of `tsimp` CLI or `ts-blank-space` loader. Moar loaders! hellmo.jpg. No clear advantage to justify extra dependency - it is easier to stick with `eslint.config.(m)js`

`eslint` is a royal PITA to configure. But Prettier is equally extreme approach in opposite direction - 99% opinionated, 1% configurable, no workarounds. So, unable to fight it for simple things, I don't use Prettier and prefer `eslint` with Stylistic.

### eslint-plugin-jsonc

Apparently the most solid solution to lint and format JSON files. It reuses ESlint rules where appropriate. Not all defaults play nicely with all configs though, so a couple of overrides is provided.

Rules: <https://ota-meshi.github.io/eslint-plugin-jsonc/rules/>

### markdownlint

Rules: <https://github.com/DavidAnson/markdownlint/blob/main/README.md>

<https://github.com/DavidAnson/markdownlint-cli2> seems to be a better CLI all around at this point.

<https://github.com/igorshubovych/markdownlint-cli> followed more conventional approach but is not going to receive future improvements.

### biome

Docs: <https://biomejs.dev/guides/getting-started/>

Tries to replace both `eslint` (linking) and Prettier (formatting), with own analyzer functionality on top (only import sorting for now).

Shares the same philosophy and options as Prettier for formatting. This is unfortunate for me. Im my own projects, I want code that is readable for me rather than code that is equally crappy for everyone. There are formatting rules that don't exist not because the ideal already exists, but because nobody way at the right time at the right place to formulate something better.

Linter and analyzer still seem like a good value proposition for projects where developers don't want to mess with `eslint` and still get a good set of rules.


## Scripts

### `npm-run-all2`

<https://github.com/bcomnes/npm-run-all2> is a maintained fork of `npm-run-all` tool.

<https://github.com/open-cli-tools/concurrently> is another alternative, but it seems to not report properly when any of subtasks exited with error.

### onchange

Many tools come with their own watchers, others don't. <https://github.com/Qard/onchange> seems to be the most straightforward solution to add this feature where it is missing.

<https://github.com/M-Zuber/npm-watch> might be a suitable alternative in some cases.


## GitHub

### GitHub actions

- <https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs>
- <https://github.com/actions/setup-node>

### Badges

GitHub workflow status badge: <https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge>

### Coverage

List of coverage providers (among others) supported by Shields_io: <https://shields.io/badges>

<https://github.com/bcoe/c8> is used for coverage reports generation. More on c8: <https://medium.com/the-node-js-collection/rethinking-javascript-test-coverage-5726fb272949>.

Instead of handling coverage reports by a 3rd-party service, a Shields_io badge can be generated based on the minimum required coverage in the config file. See <https://shields.io/badges/nycrc-config-on-git-hub> (`c8` has compatible config). Obviously, for this to be representative of reality, tests should be run through `c8` with coverage check enabled so that it would fail when conditions aren't met.

### Dependencies

[Depfu](https://depfu.com/) seems to be useful as a display for the state of dependencies. But their "reasonably up-to-date" policy - a feature that should make their product more pleasing to use - doesn't seem to work as expected and appears way too "lazy".

Dependabot is a part of GitHub now, it delivers security updates automatically and can be configured to create regular dependency updates. Among the list of package managers such as npm it also has Github Actions. [Documentation](https://docs.github.com/en/code-security/supply-chain-security/about-dependabot-version-updates).

<https://github.com/dylang/npm-check> is a handy tool when you need to manage deps manually. It is meant to be installed globally though, so it's only mentioned here.

<https://marketplace.visualstudio.com/items?itemName=idered.npm> extension for VSCode had a good premise but seems to be dropped half-baked. I only use it now to quickly see the list of available versions for some packages.

<https://marketplace.visualstudio.com/items?itemName=codeandstuff.package-json-upgrade> extension for VSCode is currently the most helpful tool for me to update dependencies.


## License

This repository is a mere template without own functionality, a configuration for external tools and libraries. And as such, it should not be considered a subject of copyright. Instead, you are encouraged to copy it and apply the license of your choice to the product you build.
