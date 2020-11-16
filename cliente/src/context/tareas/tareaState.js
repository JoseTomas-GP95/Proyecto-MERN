import React, { useReducer }  from "react";
import tareaReducer from "./tareaReducer";
import tareaContext from "./tareaContext";
import { v4 as uuidv4 } from 'uuid';

import { 
  TAREAS_PROYECTO,
  AGREGAR_TAREA, 
  VALIDAR_TAREA, 
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA
} from "../../types/index";

const TareaState = (props) => {
//DEFINIENDO EL ESTADO INICIAL
const initialState = {
  tareas: [
    {id: 1, nombre: "Pagos", estado: true, proyectoId: 1},
    {id: 2, nombre: "Productos", estado: true, proyectoId: 2},
    {id: 3, nombre: "Fecha de entrega", estado: false, proyectoId: 3},
    {id: 4, nombre: "Tecnologia", estado: false, proyectoId: 1},
    {id: 5, nombre: "Diseño", estado: true, proyectoId: 2},
    {id: 6, nombre: "Actualizaciones", estado: true, proyectoId: 3},
    {id: 7, nombre: "Documentacion", estado: false, proyectoId: 1},
    {id: 8, nombre: "Ganancias por trabajo", estado: false, proyectoId: 2},
    
  ],
  tareasproyecto: null,
  errortarea: false,
  tareaseleccionada: null,
}
// Funcion que obtenga las tareas de un proyecto por su id
const obtenerTarea = proyectoId => {
  dispatch({
    type: TAREAS_PROYECTO,
    payload: proyectoId,
  })
}

// Esta funcion agrega una tarea al proyecto seleccionado
const agregaTarea = tarea => {
  tarea.id = uuidv4();
  dispatch({
    type: AGREGAR_TAREA,
    payload: tarea,
  })
}

// Valida y muestra error si es necesario
const validarTarea = () => {
  dispatch({
    type: VALIDAR_TAREA,
  })
}

// Eliminar la tarea por el id
const eliminarTarea = id => {
  dispatch({
    type: ELIMINAR_TAREA,
    payload: id,
  })
}

//funcion que cambia su estado
const cambiaEstadoTarea = (tarea) => {
  dispatch({
    type: ESTADO_TAREA,
    payload: tarea,
  })
}

const guardarTareaActual = (tarea) => {
  dispatch({
    type: TAREA_ACTUAL,
    payload: tarea,
  })
}

// Modifica o actualiza una tarea al editarla
const actualizarTarea = (tarea) => {
  dispatch({
    type: ACTUALIZAR_TAREA,
    payload: tarea,
  })
}

// Creando el Dispatch y el state 
const [state, dispatch] = useReducer(tareaReducer, initialState)
  return(
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada:  state.tareaseleccionada,
        obtenerTarea,
        agregaTarea,
        validarTarea,
        eliminarTarea,
        cambiaEstadoTarea,
        guardarTareaActual,
        actualizarTarea
      }}
    >
      {props.children}
    </tareaContext.Provider>
  );
}

export default TareaState;
