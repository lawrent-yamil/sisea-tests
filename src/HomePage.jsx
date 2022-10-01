import React from 'react'
import Video from './components/Video'
import Servicios from './components/Servicios'
import Informacion from './components/Informacion'
import Publicaciones from './components/Publicaciones'
import Contacto from './components/Contacto'

const HomePage = () => {
  return (
    <div>
      <Video />
      <Servicios />
      <Informacion />
      <Publicaciones />
      <Contacto />
    </div>
  )
}


export default HomePage