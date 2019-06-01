
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Fish', dish_id: 1 },
        {id: 2, name: 'Penne', dish_id: 2 },
        {id: 3, name: 'T-Bone', dish_id: 3 },
        {id: 4, name: 'Meatball', dish_id: 5 },
        {id: 5, name: 'Beef', dish_id: 4 },
      ]);
    });
};
