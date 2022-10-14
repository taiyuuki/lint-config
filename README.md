## lint config

### packages

`@taiyuuki/eslint-config` - eslint basic config

`@taiyuuki/eslint-config-ts` - typescript eslint config

`@taiyuuki/eslint-config-vue` - vue eslint-config

`@taiyuuki/eslint-config-vue-unimport` - vue eslint config with unplugin-auto-import

### TODO

stylelint config

## Usage

```shell
npm i @taiyuuki/eslint-config -D
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
  extends: ['@taiyuuki/eslint-config'],
}
```

