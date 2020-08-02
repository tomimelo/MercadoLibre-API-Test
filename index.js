require("dotenv").config(); //Environment variables
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Express Initilization
const app = express();

//MORGAN Configuration
app.use(morgan("dev"));

//CORS Configuration
app.use( cors() );

app.use( express.json() );

app.use( express.static("public") );


//Rutas
app.use("/api/auth", require("./routes/auth") );
app.use("/api/users", require("./routes/users") );
app.use("/api/items", require("./routes/items") );

app.listen(process.env.PORT, () => {
    console.log("Servidor running on port " + process.env.PORT);
});