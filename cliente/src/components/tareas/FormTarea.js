import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
  // Obteniendo el proyecto activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext

  // Si no hay proyecto seleccionado aun... mensaje
  if(!proyecto) return null;

  // Destrucutiong array
  const [proyectoActual] = proyecto

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input 
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>

        <div className="contenedor-input">
          <input 
            type="submit"
            value="Crear"
            className="btn btn-primario btn-submit btn-block"
          />
        </div>

      </form>
    </div>
  );
}
export default FormTarea;