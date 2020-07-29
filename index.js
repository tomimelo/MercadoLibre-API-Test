require("dotenv").config(); //Variables de entorno
const express = require("express");
// const meli = require('mercadolibre');
const app = express();

app.use( express.json() );

app.use( express.static("public") );


app.listen(process.env.PORT, () => {
    console.log("Servidor running on port " + process.env.PORT);
});