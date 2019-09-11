import React from "react"
import Brand from "c/brand/Brand"
import Menu from "c/menu/Menu"
import Responsive from "c/Responsive"
import "./Header.css"

export default () => {
  return (
    <header className="header">
      <div className="header-content">
        <Responsive
          desktop={<Brand type="logo" filetype="svg" isLink={true} />}
          mobile={<Brand type="logo" filetype="html" isLink={true} />}
        ></Responsive>
        <Menu />
      </div>
    </header>
  )
}
