import React from "react"
import "./Main.css"

export default ({ children }) => (
  <main className="main">
    <div className="main-content">main :: {children}</div>
  </main>
)
