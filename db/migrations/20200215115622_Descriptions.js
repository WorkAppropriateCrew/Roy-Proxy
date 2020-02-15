
exports.up = async function(knex, Promise) {
  await knex.schema.createTable("productDescription", table => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .string("Title")
      .unique()
      .notNullable();
    table
      .string("Description")
      .notNullable();
    table
      .integer("Price")
      .unique()
      .notNullable();
  })
  
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable("productDescription");
};
