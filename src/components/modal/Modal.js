import React from "react"
import "./Modal.css"

export default ({ video, closeVideo }) => {
  const close = () => {
    closeVideo()
  }

  return (
    <div className="modal">
      <video className="modal-video" preload="auto" autoPlay controls>
        <source src={video} type="video/mp4" />
      </video>
      <button className="modal-close" onClick={() => close()}>
        <i className="material-icons">close</i>
      </button>
    </div>
  )
}
