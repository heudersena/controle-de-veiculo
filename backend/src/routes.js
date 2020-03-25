const route = require("express").Router();

// Inclusão dos controllers.
const IndexController = require("./controllers/IndexController");


route.get("/", IndexController.index);


module.exports = route;