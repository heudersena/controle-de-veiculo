const express = require("express");
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Router.
const router = require("./src/routes");
app.use(router);

app.listen(8080, () => { console.log(`service running... http://localhost:8080`) });