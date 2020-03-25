const express = require("express");
const app = express();

// Router.
const router = require("./src/routes");
app.use(router);

app.listen(8080, () => { console.log(`service running... http://localhost:8080`) });