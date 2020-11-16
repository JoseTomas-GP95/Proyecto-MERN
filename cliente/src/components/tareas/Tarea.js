import React from "react";

const Tarea = ({ tarea }) => {
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {
          tarea.estado
          ? (
            <button
              className="completo"
            >Completo</button>
          )
          : (
            <button
              className="incompleto"
            >Incompleto</button>
          )
        }
      </div>

      <div className="acciones">
        <button
          className="btn btn-primario"
        >Editar</button>
        <button
          className="btn btn-secundario error"
        >Eliminar</button>

      </div>
    </li>
  );
}
export default Tarea;