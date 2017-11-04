## Introduction

## NPM Introduction

Node Package Manager (npm) is installed along with Node.js installation. `npm` command helps to install packages from registry.npmjs.org website. `npm` command install packages on *node_modules* folder on the project directory.

#### To create npm project,

> mkdir react-app
> cd react-app

below command creates default *package.json* in your current working directory *react-app*

> npm init -y

#### install react packages

on npm 3.x, *--save* option helps to save the install package name in the package dependencies.

> npm install react react-dom prop-types --save

For React-Router,

> npm install react-router-dom --save

For redux,

> npm install redux redux-thunk --save

For RxJS,

> npm install rxjs --save

#### Babel Setup

Babel is a transpiler, convert ES2016 (ES6), ES2016, ES2017, ES.NEXT to the ES5, the old JavaScript.

> npm babel-preset-env babel-preset-stage-2 babel-react-preset --save-dev

Create the `.babelrc` in the project root directory

```
{
    "presets": ["env", "stage-0", "react"]
} 
```

#### Webpack setup

