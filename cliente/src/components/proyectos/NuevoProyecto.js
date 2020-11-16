import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {

  // Obteniendo el state del formulario en proyectoState.js
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorformulario, mostrarFormulario, agregarProyecto, validarError } = proyectosContext

const [proyecto, guardarProyecto] = useState({
  nombre: "",
});
const {nombre} = proyecto;

const onChange = (e) => {
  guardarProyecto({
    ...proyecto,
    [e.target.name] : e.target.value
  })
}
const onSubmit = (e) => {
  e.preventDefault();
  
  //validar
  if(nombre === "") {
    validarError();
    return;
  }

  // Reiniciar Formulario
  guardarProyecto({
    nombre: ""
  })

  agregarProyecto(proyecto)
}

  return (
    <>
      <button 
      className="btn btn-block btn-primario"
      onClick={mostrarFormulario}
      >
        Nuevo Proyecto
      </button>

      {
        formulario ?
        (
          <form 
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmit}
        >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChange}
        />

        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Agregar Proyecto"
        />
      </form>
        ) : null }
    {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}
    </>
  );
};

export default NuevoProyecto;
