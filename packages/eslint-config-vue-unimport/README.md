### vue eslint config with unplugin-auto-import

install:

```shell
npm i @taiyuuki/eslint-config-vue-unimport -D

yarn add @taiyuuki/eslint-config-vue-unimport -D

pnpm install @taiyuuki/eslint-config-vue-unimport -D
```

VS Code `settings.json`:

```json
{
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true
    }
}
```

`.eslintrc.js`:

```js
module.exports = {
  root: true,
  extends: ['@taiyuuki/eslint-config-vue-unimport'],
}
```

