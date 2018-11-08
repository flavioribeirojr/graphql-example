const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const port = 4000

const config = require('../../config/app.config')

const connection = require('./DBConnection')(config.db)
const containers = require('./container')

containers.add('DBConnection', connection)

const types = require('@/types')
const {
    resolvers,
    queries,
    mutations
} = require('@/queries')(containers)

const schema = buildSchema(`
  ${
    queries === '' ?
      '' :
      `
        type Query {
          ${queries}
        },
      `
  }
  ${
    mutations === '' ?
      '' :
      `
        type Mutation {
          ${mutations}
        },
      `
  }
  ${
    types === '' ?
      '' :
      `
        ${types}
      `
  }
`)

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port)

console.log(`Graphql API listening on :${port}`)

module.exports = app