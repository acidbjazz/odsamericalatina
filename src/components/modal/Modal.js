import React, { useState } from "react"
import "./Modal.css"

export default ({ video }) => {
  console.log(video)
  // const [isShow, setIsShow] = useState(false)
  return (
    <div className="modal">
      <video className="modal-video" preload="auto" autoPlay controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}
