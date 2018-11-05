const fs = require('fs')

const files = fs.readdirSync(__dirname).filter(file => file !== 'index.js')

module.exports = files
  .map(file => require(`./${file}`))
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