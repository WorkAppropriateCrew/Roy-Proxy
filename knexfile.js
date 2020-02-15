const path = require('path')

module.exports = {
  development: {
      client: "postgresql",
      connection: 'postgres://postgres:password@localhost:5432/SDC',
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
};
