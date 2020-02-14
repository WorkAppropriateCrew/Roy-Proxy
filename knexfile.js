module.exports = {
  development: {
      client: "postgresql",
      connection: `postgres://localhost:8000/${SDC_PostgresDB}`,
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