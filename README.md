# hello-ts

Hello, world in TypeScript with Jest

## TypeScript

Add a `tsconfig.json` file to the root of your project See [documentation](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for details

## Jest

To get Jest to run with TypeScript, add the following packages:

```
$ npm install --save-dev jest ts-jest @types/jest
```

Then add this to your `package.json`:

```js
{
    // other stuff in package.json
    "jest": {
    "transform": {
      ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "json"
    ]
  }
}
```