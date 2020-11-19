// Rutas para crear proyectos
const express = require('express');
const router = express.Router();
const proyectoController = require("../controllers/proyectosController");
// const { check } = require('express-validator');
const auth = require("../middleware/auth");

router.post("/",
auth,
proyectoController.crearProyecto
);
router.get("/",
auth,
proyectoController.crearProyecto
),


module.exports = router;