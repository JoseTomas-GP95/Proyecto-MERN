import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import { 
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTO,
  AGREGAR_PROYECTO, 
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from "../../types/index";


const ProyectoState = props => {

  const proyectos = [
    {id: 1, nombre: "Portfolio"},
    {id: 2, nombre: "E-commerce"},
    {id: 5, nombre: "React practica"},
  ]

  const initialState = {
    proyectos : [],
    formulario : false,
    errorformulario: false,
    proyecto: null,
  }

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
    type: FORMULARIO_PROYECTO
    })
  }

  // funcion para obtener los proyectos
  const obtenerProyecto = () => {
    dispatch({
    type: OBTENER_PROYECTO,
    payload: proyectos,
    })
  }

    // funcion para agregar un nuevo proyecto
    const agregarProyecto = proyecto => {
      proyecto.id = uuidv4();
      dispatch({
        type: AGREGAR_PROYECTO,
        payload: proyecto
      })
    }

  // Valida que el formulario se llene bien
  const validarError = () => {
    dispatch({
    type: VALIDAR_FORMULARIO,
    })
  }

  // Traer el proyecto al que el usuario dio click 
  const proyectoActual = proyectoId => {
    dispatch({
    type: PROYECTO_ACTUAL,
    payload: proyectoId
    })
  }

  // Funcion que elimina un proyecto
  const eliminarProyecto = proyectoId => {
    dispatch({
    type: ELIMINAR_PROYECTO,
    payload: proyectoId
    })
  }

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarFormulario,
        obtenerProyecto,
        agregarProyecto,
        validarError, 
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState;

