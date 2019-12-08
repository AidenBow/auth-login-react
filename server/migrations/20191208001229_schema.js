
exports.up = function(knex) {
  return (
    knex.schema
      .createTable("users", table => {
        table.increments("ID")
        table.string("username", 64).notNullable()
        table.string("password", 64).notNullable()
        table.integer("cash", 500).notNullable().defaultTo(10)
        table.integer("chicken_cost", 500).notNullable().defaultTo(10)
      })
      .createTable("chickens", table => {
        table.increments("ID")
        table.integer("user_ID").notNullable()
        .unsigned()
        .references('ID')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        table.string("name", 32)
        table.string("color", 32).notNullable().defaultTo("white")
      })
  )
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists("users")
      .dropTableIfExists("chickens")
  )
};
