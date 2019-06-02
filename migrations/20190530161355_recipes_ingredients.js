
exports.up = async function(knex) {
  await knex.schema.createTable('recipes_ingredients', (tbl) => {
    tbl.increments('id')

    tbl
        .integer('recipe_id')
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()

    tbl 
        .integer('ingredient_id')
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipes_ingredients');
};
