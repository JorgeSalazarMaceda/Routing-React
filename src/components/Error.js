import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
<div>
    <h1>Error 404</h1>
    <strong>Esta página no existe</strong>
    <br/>
    {/* <a href='/inicio'>Vuelve al inicio</a> Con esto recarga la página, por eso, con Link evitas que recargue toda la página y solo carga el inicio. */}
    <Link to='/inicio'>Vuelve al inicio</Link>
</div>
  )
}
