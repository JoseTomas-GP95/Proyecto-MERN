import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoProyectos = () => {
  // Obteniendo el state de los proyectos en proyectoState.js
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyecto } = proyectosContext
  
  useEffect(() => {
    obtenerProyecto();
    // eslint-disable-next-line
  }, [])
  
  // Revisamos si proyectos tiene contenido
  if(proyectos.length === 0) return <h2>Aún no tienes Proyectos nuevos 😞 Animate y crea uno ahora</h2>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map(proyecto => (
          <CSSTransition
          key={proyecto.id}
          timeout={200}
          className="producto" // En el css index esta definida
        >
          <Proyecto 
            proyecto={proyecto}
          />
        </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}
export default ListadoProyectos;