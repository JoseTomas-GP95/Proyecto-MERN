import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  // Obteniendo el state de los proyectos en proyectoState.js
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyecto } = proyectosContext
  
  useEffect(() => {
    obtenerProyecto();
  }, [])
  
  // Revisamos si proyectos tiene contenido
  if(proyectos.length === 0) return <h2>Aún no tienes Proyectos nuevos 😞 Animate y crea uno ahora</h2>;

  return (
    <ul className="listado-proyectos">
        {proyectos.map(proyecto => (
          <Proyecto 
            key={proyecto.id}
            proyecto={proyecto}
          />
        ))}
    </ul>
  );
}
export default ListadoProyectos;