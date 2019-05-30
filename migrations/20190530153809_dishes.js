
exports.up = async function(knex) {
  await knex.schema.createTable('dishes', (tbl) => {
    tbl.increments('id')
    tbl.string('name').unique().notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('dishes');
};
