/**
 * type: "logo", "iso"
 * filetype: "svg", "img", "text"
 * isLink: true, false
 */

import React from "react"
import { Link } from "gatsby"
import LogoSVG from "i/logo.svg"
import IsoSVG from "i/logo.svg"
import LogoIMG from "i/logo.png"
import IsoIMG from "i/logo.png"
import "./Brand.css"

export default ({ type, filetype, isLink }) => {
  const brand = {
    svg:
      type === "logo" ? (
        <LogoSVG className="logo" />
      ) : (
        <IsoSVG className="iso" />
      ),
    img:
      type === "logo" ? (
        <img className="logo" src={LogoIMG} alt="logo" />
      ) : (
        <img className="iso" src={IsoIMG} alt="iso" />
      ),
    text:
      type === "logo" ? (
        <div className="logo">LOGO</div>
      ) : (
        <div className="iso">ISO</div>
      ),
  }[filetype]
  return isLink ? (
    <Link className="brand" to="/">
      {brand}
    </Link>
  ) : (
    <div className="brand">{brand}</div>
  )
}
