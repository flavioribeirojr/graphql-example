module.exports = (config) => require('knex')({
  client: config.client,
  connection: {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.dbname
  }
})