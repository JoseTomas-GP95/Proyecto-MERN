import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";


const Proyecto = ({ proyecto }) => {
  // Obteniendo el state del formulario en proyectoState.js
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext
  
  return (
    <li>
      <button
        onClick={() => proyectoActual(proyecto.id)}
        className="btn btn-blank"
      >{proyecto.nombre}</button>
    </li>
  );
}
export default Proyecto;