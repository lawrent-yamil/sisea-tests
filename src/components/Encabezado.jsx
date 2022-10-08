import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "/src/css/Encabezado.css";
import logo from "../assets/img/Logo.png";

function Encabezado() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="hard">
          <img
            src={logo}
            // width="100rem"
            // height="100rem"
            className="navbar-imagen"
          />
          <h4 className="logo">
            <b>SISEA Seguridad</b>
          </h4>
        </div>

        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li>
            <Link smooth to="/#" className="INICIO">
              Inicio
            </Link>
          </li>
          <li>
            <Link smooth to="/#Servicios" className="SERVICIOS">
              Servicios
            </Link>
          </li>
          <li>
            <Link smooth to="/catalogo/#" className="CONTACTO">
              Cat&aacute;logo
            </Link>
          </li>
          <li>
            <Link to="/#Informacion" className="INFORMACION">
              Información
            </Link>
          </li>
          <li>
            <Link to="/#Publicaciones" className="PUBLICACIONES">
              Publicaciones
            </Link>
          </li>
          <li>
            <Link to="/#Contacto" className="CONTACTO">
              Contacto
            </Link>
          </li>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </>
  );
}

export default Encabezado;
