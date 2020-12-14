# Sidekick Template

## __About__

In here, **sidekick** means a small project, which to improve our programming skills (or for some extra money 🤑). But still, there're a lot of tedious works to do to start a new one. Things like creating a bunch of files(folders), or install different dependencies...etc.

To make our life a little bit easier, I managed this template for those small projects which doesn't need to involve any frameworks.  So we can start a new one anytime without repeat ourself.

<br>

## __Features__

* PostCSS
  * Autoprefixer
* Sass
* TypeScript
* webpack

> BTW, I didn't install `Lodash` intentionally but somehow it's there. And yes, you can `import` it in your `ts` file.

<br>

## __Usage__

### __1. Clone this repo__

```bash
npx degit ShiBa-Shin/dev-associates-backup/templates/t-dev-sidekick my-project
```

### __2. Install all the dependencies__

```bash
npm install
```

### __3. Compile your code__

```bash
npm run build
```

> The `watch` option has been set to `true`. You can change it to `false` in the `webpack.config.js` file.

### __4. Run server__

```bash
npm run dev
```

> The **Hot-Reload** doesn't work correctly and I haven't found the solution yet. So I guess we're 'stuck' with the **Live Server** extension from **vscode** for now. But don't worry, it works pretty well with `npm run build`. Just make sure the `watch` option is set to `true`.
---



