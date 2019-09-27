### Install Prettier and Eslint Plugin
```shell
yarn add --dev --exact prettier
yarn add --dev eslint-plugin-prettier
```

### Install vscode extension
eslint and prettier

### Configuration
```
{
  "extends": "react-app",
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### Apply Prettier Formatting on Save

VScode workspace setting: `"editor.formatOnSave": true`

More Detail [https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08](https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08)
