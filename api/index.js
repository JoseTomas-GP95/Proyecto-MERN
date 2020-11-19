const express = require("express");
const conectarDB = require("./config/db");

// Creando el servidor con express
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json. (sustituye al bodyparser)
app.use(express.json({ extended: true }))

// Importando rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/proyectos", require("./routes/proyectos"));

const PORT = process.env.PORT || 4000;

// arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor corre en el puerto ${PORT}`)
})
