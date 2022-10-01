import React from 'react'
import "/src/css/Catalogo.css"
// the tarjeta styles are in the Catalogo.css file 

export default function Tarjeta({ img, title, children }, component, visibility=false) {
  const [visible, setVisible] = React.useState(visibility)
  return (
    <>
      <div className="card-catalogo"
        style={{ margin: "0 0 50px 0" }}>
        <img className="img-card-catalogo" src={img} alt="img" />
        <h3 className="card-titulo-catalogo">{title}</h3>
        <hr />
        <div className="card-body-catalogo">
          {/* when click the button show the 'p' */}
          <button className="btn" onClick={() => setVisible(!visible)}>
            {visible ? "Ver Menos" : "Ver más"}
          </button>
          {visible && <p>{children}</p>}
        </div>
      </div>
    </>
  )
}