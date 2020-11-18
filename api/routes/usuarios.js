// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuarioControllers")

router.post("/",
  usuarioController.crearUsuario
)

module.exports = router;