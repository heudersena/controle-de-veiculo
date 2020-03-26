const knex = require("../database/connection");
const moment = require("moment");
const date = moment(new Date(),"YYYY-MM-DD  HH:mm:ss").isLocal();
console.log(date);

module.exports = {
    index(req, res) {
        res.send("ok");
    },

    async store(req, res) {
        const { tipo } = req.body;

        try {
            const isTipo = await knex("tipos").select('*').where({ tipo: tipo }).first();
            if (isTipo) {
                return res.status(200).send({ message: 'Tipo de veiculo já cadastrado', data: isTipo });
            } else {
                const id = await knex("tipos").insert({ tipo: tipo, created_at: dataHora, updated_at: dataHora });
                res.status(200).send({ message: `veiculo cadastrado corretamente.`, data: id });
            }
        } catch (error) {
            res.status(401).send({ message: error });
        }
    }

}