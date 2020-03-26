const moment = require("moment");
module.exports = {
    async dataHora() {
        return await moment.utc(new Date(),  "YYYY-MM-DD  HH:mm:ss");
    }
}