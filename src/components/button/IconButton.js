import React, { useState } from "react"
import "./IconButton.css"

export default () => {
  const [state, setState] = useState(false)
  return <button className="IconButton">{icon}</button>
}
