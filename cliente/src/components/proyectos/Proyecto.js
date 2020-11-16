import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";


const Proyecto = ({ proyecto }) => {
  // Obteniendo el state del formulario en proyectoState.js
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext

  // Obtener la funcion que esta en tareaContext
  const tareasContext = useContext(tareaContext);
  const { obtenerTarea } = tareasContext;

  // Funcion para agregar el proyecto actual
  const seleccionarProyecto = id => {
    proyectoActual(id)
    obtenerTarea(id)
  }

  return (
    <li>
      <button
        onClick={() => seleccionarProyecto(proyecto.id)}
        className="btn btn-blank"
      >{proyecto.nombre}</button>
    </li>
  );
}
export default Proyecto;