
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {name: 'pizza'},
        {name: 'pasta'}
        
      ]);
    });
};
