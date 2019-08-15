
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rec_inst').del()
    .then(function () {
      // Inserts seed entries
      return knex('rec_inst').insert([
        {rec_id: 1, inst_id: 1},
        {rec_id: 2, inst_id: 2}
      ]);
    });
};
