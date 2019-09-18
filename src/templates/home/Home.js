import React, { useState } from "react"
import Layout from "t/layout/Layout"
import Modal from "c/modal/Modal"
import "./Home.css"

export default ({ data }) => {
  const [showModal, setShowModal] = useState(null)

  const showVideo = video => {
    setShowModal(video)
  }

  const closeVideo = () => {
    setShowModal(null)
  }

  return (
    <Layout type="page" className="home">
      {showModal && <Modal video={showModal} closeVideo={closeVideo} />}
      <div className="hero">
        <video className="hero-video" preload="auto" autoPlay muted loop>
          <source src={data.videoLoop.file.url} type="video/mp4" />
        </video>
        <div className="hero-info">
          <h1 className="hero-title">
            ¿Aportan las industrias extractivas al desarrollo sostenible?
          </h1>
          <button
            className="hero-call"
            onClick={() => showVideo(data.videoPrincipal.file.url)}
          >
            <i className="material-icons">play_arrow</i>
            <span>Conoce nuestro enfoque</span>
          </button>
        </div>
      </div>
      <div className="welcome">
        <p>
          ODS América Latina es un centro de recursos, análisis e información
          acerca de la relación entre los impactos de las industrias extractivas
          y los Objetivos de Desarrollo Sostenible. Buscamos contribuir a que
          instituciones, empresas, comunidades y medios de comunicación debatan
          sobre el aporte de las industrias extractivas para lograr la Agenda
          2030.
        </p>
        <p>
          A continuación, presentamos videos con enfoques sobre los ODS Nº 5
          “Igualdad de Género”, Nº 13 “Acción por el Clima”, Nº 9 “Industria,
          innovación e infraestructura” y Nº 16 “Construcción de instituciones
          democráticas”.
        </p>
      </div>
      <div className="odss">
        {data.odss.map((item, i) => (
          <div className="ods" key={i}>
            <h2 className="ods-title">
              ODS {item.contentfulid}: {item.nombre}
            </h2>
            <div className="ods-videos">
              {item.videos.map((item, i) => (
                <div
                  className="ods-video"
                  onClick={() => showVideo(item.video.file.url)}
                  key={i}
                >
                  <picture className="ods-video-cover">
                    <img
                      className="ods-video-cover-img"
                      src={item.portada.file.url}
                      alt="cover"
                    />
                    <button className="ods-video-cover-play">
                      <i className="material-icons">play_arrow</i>
                    </button>
                  </picture>
                  <h3 className="ods-video-title">{item.titulo}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
