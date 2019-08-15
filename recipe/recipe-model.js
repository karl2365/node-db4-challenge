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
    console.log(id);
    return db('ingredient as i')
        .innerJoin('rec_ing as ri', 'i.id', 'ri.ing_id')
        .select('i.name', 'i.qty')
        .where('ri.rec_id', '=', id);
        // .andWhere('ri.ing_id', '=', 'i.id'); 
        
      
}

function getInstructions(id) {
    console.log(id);
    return db('instruction as i')
    .innerJoin('rec_inst as ri', 'i.id', 'ri.inst_id')
    .select('i.name')
    .where('ri.rec_id', '=', id);
    // .andWhere('ri.inst_id', '=', 'i.id'); 
}