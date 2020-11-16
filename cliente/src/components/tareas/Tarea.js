import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";


const Tarea = ({ tarea }) => {

  // Obteniendo el proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext
  const [proyectoActual] = proyecto

  // Obtener la funcion que esta en tareaContext
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTarea, cambiaEstadoTarea, guardarTareaActual } = tareasContext;

  // Eliminar una tarea
  const tareaEliminada = (id) => {
    eliminarTarea(id)
    obtenerTarea(proyectoActual.id)
  }

  // Funcion que cambia el estado de la tarea
  const cambiaEstado = (tarea) => {
    if(tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiaEstadoTarea(tarea)
  }

  // Funcion que selecciona la tarea actual a editar
  const seleccionarTareaActual = (tarea) => {
    guardarTareaActual(tarea)
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {
            tarea.estado
            ? (
                <button
                  className="completo"
                  onClick={() => cambiaEstado(tarea)}
                >Completo</button>
            )
            : (
              <button
                className="incompleto"
                onClick={() => cambiaEstado(tarea)}
              >Incompleto</button>
            )
        }
      </div>

      <div className="acciones">
        <button
          onClick={() => seleccionarTareaActual(tarea)}
          className="btn btn-primario"
        >Editar</button>
        <button
          onClick={() => tareaEliminada(tarea.id)}
          className="btn btn-secundario error"
        >Eliminar</button>

      </div>
    </li>
  );
}
export default Tarea;