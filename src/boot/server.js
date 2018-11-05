const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const types = require('@/types')
const { resolvers, queries, mutations } = require('@/queries')
const port = 4000

const schema = buildSchema(`
  type Query {
    ${queries}
  },
  type Mutation {
    ${mutations}
  },
  ${types}
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