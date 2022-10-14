### Typescript eslint config

install:

```shell
npm i @taiyuuki/eslint-config-ts -D

yarn add @taiyuuki/eslint-config-ts -D

pnpm install @taiyuuki/eslint-config-ts -D
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
  extends: ['@taiyuuki/eslint-config-ts'],
}
```

