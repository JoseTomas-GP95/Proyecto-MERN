import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  // Obteniendo el state del formulario en proyectoState.js
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // Si no hay proyecto seleccionado aun... mensaje
  if(!proyecto) return <h2>Selecciona un Proyecto</h2>

  // Destrucutiong array
  const [proyectoActual] = proyecto

  const tareasProyecto = [
    {nombre: "Pagos", estado: true},
    {nombre: "Productos", estado: true},
    {nombre: "Fecha de entrega", estado: false},
    {nombre: "Tecnologia", estado: false},
  ];

  // Eliminamos un proyecto completo
  const clickEliminarProyecto = () => {
    eliminarProyecto(proyectoActual.id)
  }

  return (
    <h2>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {
          tareasProyecto.length === 0
          ? (<li className="tarea"><p>No hay tareas creadas</p></li>)
          : tareasProyecto.map(tarea => (
            <Tarea 
              tarea={tarea}
            />
          ))}
      </ul>

      <button
        className="btn btn-block btn-secundario"
        onClick={clickEliminarProyecto}
      >Eliminar Proyecto &times;</button>
    </h2>
  );
}
export default ListadoTareas;