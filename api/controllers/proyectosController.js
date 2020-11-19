const Proyecto = require("../models/Proyecto");
const bcryptjs = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');

exports.crearProyecto = async (req, res) => {
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
