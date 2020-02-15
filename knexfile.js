const path = require('path')

module.exports = {
  development: {
      client: "postgresql",
      connection: 'postgres://postgres:password@localhost:5432/royolivarez',
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
};
