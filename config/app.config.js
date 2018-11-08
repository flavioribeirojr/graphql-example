const { env } = process

module.exports = {
  db: {
    client: env.DB_CLIENT || 'pg',
    host: env.DB_HOST || '127.0.0.1',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'postgres',
    password: env.DB_PASS || '',
    dbname: env.DB_NAME,
  }
}