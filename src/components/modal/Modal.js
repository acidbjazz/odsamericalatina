import React from "react"
import "./Modal.css"

export default ({ video, closeVideo }) => {
  const close = () => {
    closeVideo()
  }

  return (
    <div className="modal">
      <video className="modal-video" preload="auto" autoPlay controls>
        <source src={video.videoFile} type="video/mp4" />
      </video>
      {video.videoTitle && (
        <div className="modal-title">{video.videoTitle}</div>
      )}
      <button className="modal-close" onClick={() => close()}>
        <i className="material-icons">close</i>
      </button>
    </div>
  )
}
