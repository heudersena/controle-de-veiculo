
exports.up = function (knex) {
    return knex.schema.createTable('controles', function (table) {
        table.increments('id').primary();
        table.integer('usuario_id');
        table.foreign('usuario_id').references('id').inTable('usuarios');
        table.integer('veiculo_id');
        table.foreign('veiculo_id').references('id').inTable('veiculos');
        table.timestamps();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('controles');
};