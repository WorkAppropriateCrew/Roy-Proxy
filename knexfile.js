const path = require('path')

module.exports = {
  development: {
      client: "postgresql",
      connection: `postgres://localhost/todos_test`,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  // production: {
  //     client: 'pg',
  //     connection: process.env.DATABASE_URL,
  //     migrations: {
  //         directory: __dirname + '/db/migrations',
  //       },
  //     seeds: {
  //         directory: __dirname + '/db/seeds/production',
  //       },
  //   },
};