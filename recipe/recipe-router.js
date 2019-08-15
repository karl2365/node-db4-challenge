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




module.exports = router;

