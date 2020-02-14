const path = require('path')

module.exports = {
  development: {
      client: "postgresql",
      connection: `postgres://localhost:5432/SDC_PostgresDB`,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
};