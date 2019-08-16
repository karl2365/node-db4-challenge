const db = require('../data/db-config.js');


module.exports = {

    getRecipes,
    getShoppingList,
    getInstructions
};


function getRecipes() {
    return db('recipe');
}

function getShoppingList(id) {
    return db('ingredient as i')
        .innerJoin('rec_ing as ri', 'i.id', 'ri.ing_id')
        .select('i.name', 'i.qty')
        .where('ri.rec_id', '=', id);
}

function getInstructions(id) {
    return db('instruction as i')
    .innerJoin('rec_inst as ri', 'i.id', 'ri.inst_id')
    .select('i.name')
    .where('ri.rec_id', '=', id);
}