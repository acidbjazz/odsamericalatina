import React from "react"
import Layout from "c/layout/Layout"
import "./Home.css"

export default ({ data }) => {
  return (
    <Layout type="page" className="home">
      <div className="hero">
        <video className="hero-video" preload="auto" autoPlay muted loop>
          <source src={data.videoLoop.file.url} type="video/mp4" />
        </video>
        <div className="hero-info">
          <h1 className="hero-title">
            ¿Aportan las industrias extractivas al desarrollo sostenible?
          </h1>
          <button className="play">
            <i className="material-icons">play_arrow</i>
          </button>
        </div>
      </div>
      <div className="welcome">
        ODS América Latina es un centro de recursos, análisis e información
        acerca de la relación entre los impactos de las industrias extractivas y
        los Objetivos de Desarrollo Sostenible. Buscamos contribuir a que
        instituciones, empresas, comunidades y medios de comunicación debatan
        sobre el aporte de las industrias extractivas para lograr la Agenda
        2030. A continuación, presentamos videos con enfoques sobre los ODS Nº 5
        “Igualdad de Género”, Nº 13 “Acción por el Clima”, Nº 9 “Industria,
        innovación e infraestructura” y Nº 16 “Construcción de instituciones
        democráticas”.
      </div>
      <ul className="odss">
        {data.odss.map((item, i) => (
          <li key={i}>
            <h2>
              ODS #{item.contentfulid} :: {item.nombre}
            </h2>
            <ul className="ods-videos">
              {item.videos.map((item, i) => (
                <li key={i}>
                  <h3>{item.titulo}</h3>
                  <img src={item.portada.file.url} alt="x" width="360" />
                  {/* <video className="sub" preload="auto" width="360" controls>
                    <source src={item.video.file.url} type="video/mp4" />
                  </video> */}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
