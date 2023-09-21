import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PANEL DE CONTROL</h1>
        <p>Elige alguna de estas opciones</p>
    
    <nav>
        <ul>

            <li>
                <NavLink to='/panel/inicio'>Inicio</NavLink>
            </li>

            <li>
                <NavLink to='/panel/crear-articulos'>Crear artículos</NavLink>
            </li>

            <li>
                <NavLink to='/panel/gestion-usuarios'>Gestión de usuarios</NavLink>
            </li>

            <li>
                <NavLink to='/panel/acerca-de'>Acerca de</NavLink>
            </li>

        </ul>
    </nav>
    <div>
        {/* Aquí queremos cargar los componentes de las subrutas de panel, para eso hay que usar el componente Outlet*/}
        <Outlet/> {/*  Con esto indicas que cargues los componentes que vienen en las subrutas */}
    </div>
    </div>
  )
}