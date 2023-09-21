import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    // Valores por defecto en parámetros opcionales
    // let {nombre='Jorge', apellido=' Salazar'} = useParams();
    
    const {nombre, apellido} = useParams();

    // Funcion para navegar enviando los datos a una ruta concatenando parametros.
    const navegar = useNavigate(); 
    
    const enviar = (e) => {
      e.preventDefault();
      let nombre = e.target.nombre.value;
      let apellido = e.target.apellido.value;
      let url = `/persona/${nombre}/${apellido}`; // Comillas inversas (comillas de plantilla o backticks) para que sean correctamente interpoladas

      if(nombre.length <= 0 && apellido.length <=0){
        navegar('/inicio');
      } else{
        navegar(url);
      }
    };


  return (
    <div>
        {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
        {nombre && <h1>Página de Persona: {nombre}{apellido}</h1>}
        
        <p>Esta es la página de Persona</p>

{/* Formulario para redirigirnos a la misma página con nombre y apellidos, entonces onsubmit llama a enviar */}
        <form onSubmit={enviar}>
          <input type='text' name='nombre'/>
          <input type='text' name='apellido'/>
          <input type='submit' name='enviar' value='enviar'/>
        </form>

    </div>
  )
}
