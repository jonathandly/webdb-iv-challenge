
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Parsley'},
        {id: 2, name: 'Ground Beef'},
        {id: 3, name: 'Taco Shells'},
        {id: 4, name: 'Penne Pasta'},
        {id: 5, name: 'Steak Sauce'}
      ]);
    });
};
