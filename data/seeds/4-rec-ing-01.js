
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rec_ing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rec_ing').insert([
        {rec_id: 1, ing_id: 1},
        {rec_id: 2, ing_id: 2}
      ]);
    });
};
