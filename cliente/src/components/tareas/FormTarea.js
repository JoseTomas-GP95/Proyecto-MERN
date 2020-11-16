import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  // Obteniendo el proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext

    // Obtener la funcion que esta en tareaContext
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregaTarea, validarTarea, obtenerTarea, actualizarTarea } = tareasContext;

    
    // State local
    const [ tarea, guardarTarea ] = useState({
    nombre: ""
    })

  useEffect(() => {
    if(tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada)
    } else {
      guardarTarea({
        nombre: ""
      })
    }
  }, [tareaseleccionada])

  //Extraer nombre de la tarea
  const { nombre } = tarea

  // Si no hay proyecto seleccionado aun... mensaje
  if(!proyecto) return null;

  // Destrucutiong array
  const [proyectoActual] = proyecto

  // Leer valores del formulario 
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // Validacion
    if(nombre.trim() === "") {
      validarTarea()
      return;
    }

    // Chequear si se crea o se edita una tarea
    if(tareaseleccionada === null) {
      tarea.proyectoId = proyectoActual.id; // le digo la tarea del proyecto en especifico
      tarea.estado = false; // Todas las tareas nuevas estan incompletas
      agregaTarea(tarea) // Le paso la tarea
    } else {
      actualizarTarea(tarea)
    }

    // Pasar la validacion

    // Obtine las tareas del proyecto actual
    obtenerTarea(proyectoActual.id)

    // Reiniciar el form
    guardarTarea({
      nombre: ""
    })
    
  }

  return (
    <div className="formulario">
      <form 
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input 
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input 
            type="submit"
            value={tareaseleccionada ? "Editar Tarea" : "Crear"}
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
      { errortarea ? <p className="mensaje error">El nombre la tarea es obligatorio</p> : null }
    </div>
  );
}
export default FormTarea;