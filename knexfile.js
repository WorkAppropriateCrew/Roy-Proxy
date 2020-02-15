const path = require('path')

module.exports = {
  development: {
      client: "postgresql",
      connection: 'postgres://postgres:Royoli1983@localhost:5432/SDC_PostgresDB',
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
