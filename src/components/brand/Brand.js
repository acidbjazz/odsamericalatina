/**
 * @class Brand
 * This class contains the multiples assets for logo
 *
 * @option type: String = undefined ("logo", "iso")
 * @option filetype: String = undefined ("svg", "img", "html")
 * @option isLink: Boolean = undefined
 */

import React from "react"
import { Link } from "gatsby"
import LogoSVG from "i/logo.svg"
import IsoSVG from "i/logo.svg"
import LogoIMG from "i/logo.png"
import IsoIMG from "i/logo.png"
import "./Brand.css"
import ColorsBar from "i/colors-bar.svg"

export default ({ type, filetype, isLink }) => {
  const brand = {
    svg:
      type === "logo" ? (
        <LogoSVG className="logo-svg" />
      ) : (
        <IsoSVG className="iso-svg" />
      ),
    img:
      type === "logo" ? (
        <img className="logo-img" src={LogoIMG} alt="logo" />
      ) : (
        <img className="iso-img" src={IsoIMG} alt="iso" />
      ),
    html:
      type === "logo" ? (
        <div className="logo-html">
          <ColorsBar className="colors-bar" />
          <div className="logo-html-text">ODS AMÉRICA LATINA</div>
        </div>
      ) : (
        <div className="iso-text">ISO</div>
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
