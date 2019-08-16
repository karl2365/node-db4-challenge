const express = require('express');
const knex = require('knex');
const recipe = require('./recipe-model.js');

// const knexConfig = require('../knexfile.js');

// const db = knex(knexConfig.development);


const router = express.Router();


router.get('/', (req, res) => {
    recipe
      .getRecipes()
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(error => {
        res.status(500).json({error: 'could not access database.'});
      });
  });

router.get('/:id/shoppingList', async (req, res) => {
    try {
        const shoppingList = await recipe.getShoppingList(req.params.id);
        if (shoppingList) {
            res.status(200).json(shoppingList);
        }
        else {
            res.status(404).json({message: 'No recipe by that id was found.'})
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to retrieve data.' });

    }
});

router.get('/:id/instructions', async (req, res) => {
    try {
        const instructions = await recipe.getInstructions(req.params.id);
        if (instructions) {
            res.status(200).json(instructions);
        }
        else {
            res.status(404).json({message: 'No recipe by that id was found.'})
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to retrieve data.' });

    }
});

 

module.exports = router;

