const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");

exports.crearProyecto = async (req, res) => {
// Revision de errores (errores sera un array)
// Estos son los resultados
const errores = validationResult(req);
if(!errores.isEmpty()) {
  return res.status(400).json({errores: errores.array()})
}

  try {
    // Crear un nuevo proyecto
    const proyecto = new Proyecto(req.body);

    // Guardar el creador via JWT
    proyecto.creador = req.usuario.id;

    // Guardar el proyecto 
    proyecto.save();
    res.json(proyecto);

  } catch(error) {
    res.status(500).send("Hubo un error en el servidor")
  }
}

// Obtener todos los proyectos del usuario actual
exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find({ creador: req.usuario.id });
    res.json({ proyectos });
  } catch(error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
}