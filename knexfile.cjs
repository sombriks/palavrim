// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "palavrim.db",
    },
    useNullAsDefault: true,
    debug: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/server/migrations",
    },
  },
  staging: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "root",
      database: "palavrim",
    },
    debug: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/server/migrations",
    },
  },
  production: {
    client: "mysql2",
    connection: process.env.JAWSDB_URL,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/server/migrations",
  },
};
