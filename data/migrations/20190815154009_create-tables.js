
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
    })
    .createTable('ingredient', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
    })
    .createTable('instruction', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .notNullable();
    })
    .createTable('rec_inst', tbl => {
        tbl.increments();
        tbl.integer('rec_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('inst_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('instruction')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');   
    })
    .createTable('rec_ing', tbl => {
        tbl.increments();
        tbl.integer('rec_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('ing_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredient')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');   
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('rec_ing')
    .dropTableIfExists('rec_inst')
    .dropTableIfExists('instruction')
    .dropTableIfExists('ingredient')
    .dropTableIfExists('recipe')
};
