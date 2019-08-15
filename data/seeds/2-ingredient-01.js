
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {name: 'dough', qty: 1.0},
        {name: 'noodles', qty: 16.0}
      ]);
    });
};
