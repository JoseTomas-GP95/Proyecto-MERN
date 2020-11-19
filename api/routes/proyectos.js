// Rutas para crear proyectos
const express = require('express');
const router = express.Router();
const proyectoController = require("../controllers/proyectosController");
const auth = require("../middleware/auth");
const { check } = require('express-validator');

router.post("/",
auth,
[
  check("nombre", "El nombre del proyecto debe ser ingresado").not().isEmpty()
],
proyectoController.crearProyecto
);
router.get("/",
auth,
proyectoController.obtenerProyectos
),


module.exports = router;