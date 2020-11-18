const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {
  
  try {
    let usuario;

    //Creando al nuevo usuario
    usuario = new Usuario(req.body);

    // Guardar al usuario nuevo
    await usuario.save();

    // Confirmar a traves de mensaje
    res.send("Usuario creado con éxito")
  } catch(error) {
      console.log(error)
      res.status(400).send("Se ha presentado un error");
  }
}