require("dotenv").config(); //Variables de entorno
const express = require("express");
var cors = require("cors");

//Express Initilization
const app = express();

//CORS Configuration
app.use( cors() );

app.use( express.json() );

app.use( express.static("public") );


//Rutas
app.use("/api/auth", require("./routes/auth") );

app.listen(process.env.PORT, () => {
    console.log("Servidor running on port " + process.env.PORT);
});