
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (tbl) => {
    tbl.increments('id')
    tbl.string('name').unique().notNullable()
    tbl
        .integer('dish_id')
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipes');
};
