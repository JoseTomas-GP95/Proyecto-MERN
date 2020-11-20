// Rutas para crear proyectos
const express = require('express');
const router = express.Router();
const proyectoController = require("../controllers/proyectosController");
const auth = require("../middleware/auth");
const { check } = require('express-validator');
// CREAR PROYECTO
router.post("/",
  auth,
  [
    check("nombre", "El nombre del proyecto debe ser ingresado").not().isEmpty()
  ],
  proyectoController.crearProyecto
);

// OBTENER TODOS LOS PROYECTOS
router.get("/",
  auth,
  proyectoController.obtenerProyectos
);

// ACTULAIZAR O EDITAR PROYECTO (POR ID)
router.put("/:id", 
  auth,
  [
    check("nombre", "El nombre del proyecto debe ser ingresado").not().isEmpty()
  ],
  proyectoController.actualizarProyecto
);

// ELIMINAR PROYECTO
router.delete("/:id", 
  auth,
  proyectoController.eliminarProyecto
);



module.exports = router;