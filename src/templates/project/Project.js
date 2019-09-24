import React from "react"
import Layout from "t/layout/Layout"
import "./Project.css"

export default ({ data }) => {
  console.log(data.creditos)
  return (
    <Layout type="page" className="project" title="El Proyecto">
      <h1>EL PROYECTO</h1>
      <div
        className="about"
        dangerouslySetInnerHTML={{
          __html: data.texto.childMarkdownRemark.html,
        }}
      />
      <div className="odss">
        {data.odss.map((item, i) => (
          <div className="ods" key={i}>
            <img className="ods-icon" src={item.icono.file.url} alt="icon" />
            <h3 className="ods-title">
              ODS {item.contentfulid}: {item.nombre}
            </h3>
            <div className="ods-description">
              {item.descripcion.descripcion}
            </div>
            <a className="go" href={item.url}>
              Leer más
            </a>
          </div>
        ))}
      </div>
      <div
        className="credits"
        dangerouslySetInnerHTML={{
          __html: data.creditos.childMarkdownRemark.html,
        }}
      />
    </Layout>
  )
}
