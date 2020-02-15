const path = require('path')

module.exports = {
  development: {
      client: "postgresql",
      connection: 'postgres://postgres:password@localhost:5432/royolivarez',
      // connection: {
      //   host: 'localhost',
      //   user: 'postgres',
      //   password: 'Royoli1983',
      //   database: 'SDC_PostgresDB'
      // },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
};
