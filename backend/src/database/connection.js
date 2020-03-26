const knex = require("knex");
const configuracao = require("../../knexfile.js");
const connection = knex(configuracao.development);
module.exports = connection;