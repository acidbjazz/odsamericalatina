import React, { useState } from "react"
import Brand from "c/brand/Brand"
import Menu from "c/menu/Menu"
import Responsive from "c/Responsive"
import "./Header.css"

export default () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const openMenu = state => {
    setMenuIsOpen(state)
  }
  return (
    <header className={menuIsOpen ? "header menu-is-open" : "header"}>
      <div className="header-content">
        <Responsive
          desktop={<Brand type="logo" filetype="svg" isLink={true} />}
          mobile={<Brand type="logo" filetype="html" isLink={true} />}
        ></Responsive>
        <Menu openMenu={openMenu} />
      </div>
    </header>
  )
}
