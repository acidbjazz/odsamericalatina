import React, { useState } from "react"
import "./ToggleButton.css"

export default ({ fx, on, off }) => {
  const [state, setState] = useState(false)
  const toggle = () => {
    setState(!state)
    fx(!state)
  }
  return (
    <button className="toggle-button" onClick={toggle}>
      {state ? on : off}
    </button>
  )
}
