import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const ListadoTareas = () => {
  // Obteniendo el state del formulario en proyectoState.js
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

    // Obtener las tareas de un proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

  // Si no hay proyecto seleccionado aun... mensaje
  if(!proyecto) return <h2>Selecciona un Proyecto</h2>

  // Destrucutiong array
  const [proyectoActual] = proyecto


  // Eliminamos un proyecto completo
  const clickEliminarProyecto = () => {
    eliminarProyecto(proyectoActual.id)
  }

  return (
    <h2>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {
          tareasproyecto.length === 0
          ? 
          
          (<li className="tarea"><p>No hay tareas creadas</p></li>)
          : 
          <TransitionGroup>
            { tareasproyecto.map(tarea => (
              <CSSTransition
                key={tarea.id}
                timeout={200}
                className="tarea" // En el css index esta definida
              >
                <Tarea 
                  tarea={tarea}
                />
              </CSSTransition>
              ))}
          </TransitionGroup>
          }
      </ul>

      <button
        className="btn btn-block btn-secundario"
        onClick={clickEliminarProyecto}
      >Eliminar Proyecto &times;</button>
    </h2>
  );
}
export default ListadoTareas;