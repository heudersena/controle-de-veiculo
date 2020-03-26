
exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table) {
        table.increments('id').primary();
        table.string('nome');
        table.string('email');
        table.string('login');
        table.string('senha');
        table.string('isActive').defaultTo(1);
        table.string('isAdmin').defaultTo(0);
        table.timestamps();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('usuarios');
};
