const express = require("express");
const conectarDB = require("./config/db");

// Creando el servidor con express
const app = express();

// Conectar a la base de datos
conectarDB();


const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("hola mundo")
})


app.listen(PORT, () => {
  console.log(`El servidor corre en el puerto ${PORT}`)
})
