import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import "u/Vars.css"
import "u/Normalizer.css"
import "./Layout.css"

export default ({ children, type, className }) => {
  return (
    <div className={`layout ${type} ${className}`}>
      {
        {
          page: (
            <>
              <Header></Header>
              <Main children={children} />
              <Footer></Footer>
            </>
          ),
          app: (
            <>
              <Header></Header>
              <Main children={children} />
            </>
          ),
        }[type]
      }
    </div>
  )
}
