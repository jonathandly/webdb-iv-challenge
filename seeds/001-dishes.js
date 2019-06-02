
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dishes').insert([
    { id: 1, name: 'Tacos' },
    { id: 2, name: 'Spaghetti & Meatballs' },
    { id: 3, name: 'Steak' },
    { id: 4, name: 'Enchiladas' },
    { id: 5, name: 'Italian Wedding Soup' }
  ]);
};
