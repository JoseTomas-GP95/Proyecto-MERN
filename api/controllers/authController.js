const Usuario = require("../models/Usuario");
const bcryptjs = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
  // Revision de errores
  const errores = validationResult(req);
  if(!errores.isEmpty()) {
    return res.status(400).json({erorres: errores.array( )})
  }

  // Extraer el email y el password
  const { email, password } = req.body;

  try {
    // Revisar que sea un usuario que esté registrado
    let usuario = await Usuario.findOne({ email })
    if(!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }

    // Validar el password
    const passwordCorrecto = await bcryptjs.compare(password, usuario.password);
    if(!passwordCorrecto) {
      return res.status(400).json({ msg: "El password es incorrecto" })
    }

  // Si todo es correcto Crear y firmar jwt
  const payload = {
    usuario: {
      id: usuario.id
    }
  };

  // Firmar el JWT
  jwt.sign(payload, process.env.SECRETA, {
    expiresIn: 3600 // una horita
  }, (error, token) => {
    if(error) throw error;

  // Confirmar a traves de mensaje
  res.json({ token });
  })
  } catch(error) {
    console.log(error)
  }
}