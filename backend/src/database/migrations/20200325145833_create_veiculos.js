
exports.up = function (knex) {
    return knex.schema.createTable('veiculos', function (table) {
        table.increments('id').primary();
        table.integer('tipo_id');
        table.foreign('tipo_id').references('id').inTable('tipos');
        table.string('placa');
        table.string('renavan');
        table.string('ano');
        table.string('cor');
        table.timestamps();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('veiculos');
};