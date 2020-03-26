
exports.up = function (knex) {
    return knex.schema.createTable('tipos', function (table) {
        table.increments('id').primary();
        table.string("tipo", 50);
        table.timestamps();
    });

};

exports.down = function (knex) {
    return knex.schema.dropTable('tipos');
};