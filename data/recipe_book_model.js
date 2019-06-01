const db = require('./dbConfig');

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
};

function getDishes() {
    return db('dishes');
} 

async function addDish(dish) {
    const [id] = await db('dishes').insert(dish);

    return getDish(id);
}

function getDish(id) {
    return db('dishes')
        .where({ id })
        .first();
}

function getRecipes() {
    return db('recipes');
}

async function addRecipe(recipe) {
    const [id] = await db('recipes').insert(recipe);

    return getDish(id);
}
