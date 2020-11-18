const express = require("express");
const conectarDB = require("./config/db");

// Creando el servidor con express
const app = express();

// Conectar a la base de datos
conectarDB();

// Importando rutas
app.use("/api/usuarios", require("./routes/usuarios"));

const PORT = process.env.PORT || 4000;

app.post("/", (req, res) => {
  res.send("hola mundo")
})

app.listen(PORT, () => {
  console.log(`El servidor corre en el puerto ${PORT}`)
})
