import React from "react"
import Layout from "c/layout/Layout"
import "./Project.css"

export default ({ data }) => {
  return (
    <Layout type="page" className="project">
      <div
        className="about"
        dangerouslySetInnerHTML={{
          __html: data.texto.childMarkdownRemark.html,
        }}
      />
      <ul className="odss">
        {data.odss.map((item, i) => (
          <li key={i}>
            <h2>
              ODS #{item.contentfulid} :: {item.nombre}
            </h2>
            <img src={item.icono.file.url} alt="x" />
            <div className="description">{item.descripcion.descripcion}</div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
