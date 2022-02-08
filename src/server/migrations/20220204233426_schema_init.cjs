/**
 * @type Knex
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", (t) => {
      t.increments("id");
      t.string("uid").unique().notNullable();
      t.string("pwd");
      t.timestamps();
    })
    .createTable("game", (t) => {
      t.increments("id");
      t.string("uid").unique().notNullable();
      t.integer("user_id")
        .unsigned()
        .notNullable()
        .references("user.id")
        .onDelete("cascade");
      t.string("word").notNullable();
      t.timestamps();
    });
};

/**
 * @type Knex
 */
exports.down = function (knex) {
  return knex.schema.dropTable("game").dropTable("user");
};
