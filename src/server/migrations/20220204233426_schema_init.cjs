exports.up = function (knex) {
  return knex.schema.createTable("user", (t) => {});
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
