import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import Seo from "c/Seo"
import "u/Vars.css"
import "u/Normalizer.css"
import "./Layout.css"

export default ({ children, type, className, title = null, cover = null }) => {
  return (
    <div className={`layout ${type} ${className}`}>
      <Seo title={title} cover={cover} />
      {
        {
          page: (
            <>
              <Header />
              <Main children={children} />
              <Footer />
            </>
          ),
          app: (
            <>
              <Header />
              <Main children={children} />
            </>
          ),
        }[type]
      }
    </div>
  )
}
