import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'; /* Importamos para poder hacer los links */
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Persona } from '../components/Persona';
import { Error } from '../components/Error';
import { PanelControl } from '../components/PanelControl';
import { InicioPanel } from '../components/panel/Inicio';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/Gestion';
import { Acerca } from '../components/panel/Acerca';

export const RouterPrincipal = () => {
  return (
    //Aqui irán las rutas definiendo la estructura (un menú, cargar rutas etc)
    //BrowserRouter --> Componente principal proporcionado por react-router-dom que envuelve toda tu aplicación y habilita el enrutamiento. Debe envolver todas tus rutas.
    //Routes --> Componente que se utiliza para definir las rutas en tu aplicación. Dentro de <Routes>, puedes especificar las rutas disponibles y qué componentes se deben renderizar cuando se visite una ruta específica.
    //Route --> Este componente se utiliza para definir una ruta específica en tu aplicación. Tiene dos atributos ppales: path (el camino de la URL) y element (el componente que se debe renderizar cuando la URL coincide con path).
    //Ahora para mostrarlos hay que usar la etiqueta del RouterPrincipal en App.js y cuando se imprima una ruta, se cargará su elemento
    <BrowserRouter> 

      <h1>Cabecera</h1>
      <hr/>

      {/***************** Menú *****************/}
      {/* En vez de hacer un listado de enlaces, lo que queremos es un listado que modifique solo la parte de abajo, la section, para que la APP sea SPA*/}
      {/* Para ello usamos el enlace navlink (En lugar del enlace a href)*/}
      <nav>
        <ul>

          <li>
            <NavLink 
            to='/inicio'
            className={({isActive}) => { // Hacemos una función de callback, que recibe el parametro isActive, y devolvemos un boolean, si es true, dame la clase activado de css (para que se marque), si no, no. (Hacemos la función mas limpia en los otros enlaces)
              return isActive ? 'activado' : '';
            }}
            >Inicio</NavLink>
          </li>

          <li>
            <NavLink 
            to='/articulos'
            className={({isActive}) => isActive ? 'activado' : ''}>Articulos</NavLink>
          </li>

          <li>
            <NavLink 
            to='/contacto'
            className={({isActive}) => isActive ? 'activado' : ''}>Contacto</NavLink>
          </li>

          <li>
            <NavLink 
            to='/panel'
            className={({isActive}) => isActive ? 'activado' : ''}>Panel de control</NavLink>
          </li>

        </ul>
      </nav>
      <hr/>


      <section className='contenido-principal'>
         {/* Cargamos componentes que coinciden con el path */}
        <Routes>
           
            <Route path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/articulos' element={<Articulos/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/persona/:nombre/:apellido' element={<Persona/>} /> {/* Componente al que le pasamos parametros, por ejemplo nombre --> Se hace en el path y lo recoges en el componente con el hook useParams*/}
            <Route path='/persona/:nombre' element={<Persona/>} />
            <Route path='/persona' element={<Persona/>} />
            <Route path='/redirigir' element={<Navigate to='/persona/Jorgete/Salazar'/>}/> {/* Ejemplo de redirecciones (se usa navigate to)*/}
            
            <Route path='/panel/*' element={<PanelControl/>}>
                <Route path='inicio' element={<InicioPanel/>} />
                <Route path='crear-articulos' element={<Crear/>} />
                <Route path='gestion-usuarios' element={<Gestion/>} />
                <Route path='acerca-de' element={<Acerca/>} />
              </Route> {/* Estas serían subrutas, por eso el path no lleva /, porque no empieza desde la raíz */}
            
            <Route path='*' element={<Error/>} /> {/* Ruta con * (cualquier path que no exista) y lo usamos para indicar un error */}
        </Routes>
        </section>
        <hr/>

        <footer>
          Este es el pie de página.
        </footer>

    </BrowserRouter>
  )
}
