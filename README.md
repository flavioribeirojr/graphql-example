# Description

This project uses graphql to expose an example API just
for studies purposes

The API will be based on a store of computers.

# Getting started

First, install the dependencies

```bash
$ npm install

or

$ yarn install
```

To run the app:
```bash
$ node index.js
```

# Project structure

Inside the `./src` folder are 2 folders: `queries` and `types`

To create new Queries/Mutations you just need to place a JS module inside `src/queries` that exposes 3 `values`:

* `queries`: An string defining the graphQL queries
* `mutations`: An string defining the graphQL mutations
* `resolvers`: An object of functions that going to handle the requests to the API

To create types you'll need to place a JS module inside `./src/types` that expose only a graphQL string which defines the type.