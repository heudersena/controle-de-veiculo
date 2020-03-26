const route = require("express").Router();

// Inclusão dos controllers.
const IndexController = require("./controllers/IndexController");
const TipoController = require("./controllers/TipoController");


route.get("/", IndexController.index);

route.post("/modelo/veicular/add", TipoController.store);


module.exports = route;