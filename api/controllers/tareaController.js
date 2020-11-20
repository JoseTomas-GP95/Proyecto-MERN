const Tarea = require("../models/Tarea");
const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");

exports.crearTarea = async (req, res) => {
  // Revision de errores (errores sera un array)
  // Estos son los resultados
  const errores = validationResult(req);
  if(!errores.isEmpty()) {
    return res.status(400).json({errores: errores.array()})
  }
  
  try {
    // Extraer proyecto y ver si existe o no
    const { proyecto } = req.body;

    const existeProyecto = await Proyecto.findById(proyecto);
    if(!existeProyecto) {
      return res.status(404).json({ msg: "El proyecto no aparece 😥" })
    }

    // Verificar el proyecto este hecho por el mismo creador
    if(existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    // Crear la tarea
    const tarea = new Tarea(req.body);
    await tarea.save(); // Salvarla
    res.json({ tarea }) // Agregarla

  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error")
  } 
}

exports.obtenerTareas = async (req, res) => {
  try {
    // Extraer proyecto y ver si existe o no
    const { proyecto } = req.body;

    const existeProyecto = await Proyecto.findById(proyecto);
    if(!existeProyecto) {
      return res.status(404).json({ msg: "El proyecto no aparece 😥" })
    }

    // Verificar el proyecto este hecho por el mismo creador
    if(existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    // Obtener las tareas por proyecto
    const tareas = await Tarea.find({ proyecto });
    res.json({ tareas });

  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error")
  }
}

// Actualizar una tarea
exports.actualizarTarea = async (req, res) => {
  try {
    // Extraer proyecto y ver si existe o no
    const { proyecto, nombre, estado } = req.body;

    // Si la tarea existe o no
    let tarea = await Tarea.findById(req.params.id);

    if(!tarea) {
      return res.status(404).json({ msg: "La tarea no existe" });
    }
    // Extraer proyecto
    const existeProyecto = await Proyecto.findById(proyecto);


    // Verificar el proyecto este hecho por el mismo creador
    if(existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    // Crear un objeto con la nueva informacion
    const nuevaTarea = {};

    if(nombre) {
      nuevaTarea.nombre = nombre;
    }

    if(estado) {
      nuevaTarea.estado = estado;
    }

    // Guardar la tarea
    tarea = await Tarea.findOneAndUpdate({ _id: req.params.id }, nuevaTarea, { new: true });
    res.json({ tarea })

  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error")
  }
}
// Eliminar una tarea
exports.eliminarTarea= async (req, res) => {
  try {
    // Extraer proyecto y ver si existe o no
    const { proyecto } = req.body;

    // Si la tarea existe o no
    let tarea = await Tarea.findById(req.params.id);

    if(!tarea) {
      return res.status(404).json({ msg: "La tarea no existe" });
    }

    // Extraer proyecto
    const existeProyecto = await Proyecto.findById(proyecto);

    // Verificar el proyecto este hecho por el mismo creador
    if(existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado" });
    }

    // Eliminar una tarea por su id
    await Tarea.findOneAndRemove({_id: req.params.id});
    res.json({ msg: "Tarea Eliminada" })
    
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error")
  }
}


