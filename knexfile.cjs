// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: 'palavrim.db'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/server/migrations'
    },
  },

  development2: {
    client: 'mysql2',
    connection: {
      database: 'palavrim',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/server/migrations'
    },
  },

};
