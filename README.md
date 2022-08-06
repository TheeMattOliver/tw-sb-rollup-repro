# tw-sb-rollup-repro

`yarn`

`yarn storybook` 👍

`yarn build` 👎

Error:

```
$ NODE_ENV=production npx tailwindcss -o ./dist/tw.css --minify
/my-project/node_modules/tailwindcss/peers/index.js:91395
        throw new Error('PostCSS plugin ' + plugin.postcssPlugin + ' requires PostCSS 8.\n' + 'Migration guide for end-users:\n' + 'https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users');
              ^

Error: PostCSS plugin tailwindcss requires PostCSS 8.
Migration guide for end-users:
https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users
    at Processor.normalize (/my-project/node_modules/tailwindcss/peers/index.js:91395:15)
    at new Processor (/my-project/node_modules/tailwindcss/peers/index.js:91298:25)
    at postcss (/my-project/node_modules/tailwindcss/peers/index.js:90824:10)
    at buildOnce (/my-project/node_modules/tailwindcss/lib/cli.js:577:40)
    at build (/my-project/node_modules/tailwindcss/lib/cli.js:796:5)
    at Object.<anonymous> (/my-project/node_modules/tailwindcss/lib/cli.js:331:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)


```
