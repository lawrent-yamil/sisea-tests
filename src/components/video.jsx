import React from 'react'
import '/src/css/video.css'
import Presentacion from "/src/video/Presentacion.mp4"

function Video() {

  return (
    <>
      <div className='convideo'>
        <video src={Presentacion} autoPlay loop muted type="video/mp4"/>
      </div>
    </>
  )
}

export default Video 