const Usuario = require("../models/Usuario");
const bcryptjs = require("bcrypt");
const { validationResult } = require("express-validator");

exports.crearUsuario = async (req, res) => {

// Revision de errores (errores sera un array)
// Estos son los resultados
const errores = validationResult(req);
if(!errores.isEmpty()) {
  return res.status(400).json({erorres: errores.array( )})
}

// Destructuring email y password
const { password } = req.body;

  try {
    let usuario;

    //Creando al nuevo usuario
    usuario = new Usuario(req.body);

    // Hashear el password
    // salt -> generador de password unicos
    // si alguien pone 123 y otro tal cual la clave hasheada es diferente
    const salt = await bcryptjs.genSalt(10); // 10 rondas, bits
    usuario.password = await bcryptjs.hash(password, salt);

    // Guardar al usuario nuevo
    await usuario.save();

    // Confirmar a traves de mensaje
    res.send("Usuario creado con éxito")
  } catch(error) {
      console.log(error)
      res.status(400).send("Se ha presentado un error");
  }
}