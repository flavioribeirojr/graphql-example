const fs = require('fs')

const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js')

module.exports = (container) =>
  files
    .map(file => require(`./${file}`)(container))
    .reduce(
      (graphqlQueries, { resolvers, queries, mutations }) => ({
        resolvers: {
          ...graphqlQueries.resolvers,
          ...resolvers
        },
        mutations: graphqlQueries.mutations + mutations,
        queries: graphqlQueries.queries + queries
      }),
      {
        resolvers: {},
        mutations: '',
        queries: ''
      })