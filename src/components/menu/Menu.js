import React from "react"
import { Link } from "gatsby"
import Responsive from "c/Responsive"
import ToggleButton from "c/button/ToggleButton"
import "./Menu.css"

export default ({ openMenu }) => {
  return (
    <div className="menu">
      <Responsive
        desktop={null}
        mobile={
          <ToggleButton
            fx={openMenu}
            on={<i className="material-icons">close</i>}
            off={<i className="material-icons">menu</i>}
          />
        }
      />
      <nav className="nav-pages">
        <Link to="/" className="nav-item" activeClassName="active">
          Inicio
        </Link>
        <Link to="/proyecto/" className="nav-item" activeClassName="active">
          El Proyecto
        </Link>
        <Link to="/mapa/" className="nav-item" activeClassName="active">
          Mapa
        </Link>
        <Link
          to="/noticias/"
          className="nav-item"
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: "nav-item active" } : null
          }
        >
          Noticias
        </Link>
        <Link to="/recursos/" className="nav-item" activeClassName="active">
          Recursos
        </Link>
      </nav>
    </div>
  )
}
