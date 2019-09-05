import React from "react"
import Layout from "c/layout/Layout"
import "./Resources.css"

export default ({ data }) => {
  return (
    <Layout type="page" className="resources">
      <h1>Recursos</h1>
      <ul className="list">
        {data.group.map((item, i) => (
          <li key={i}>
            <h2>{item.fieldValue}</h2>
            <ul>
              {item.nodes.map((item, i) => (
                <li key={i}>
                  <em>{item.tematica}</em> <strong>{item.titulo}</strong>
                  <div>{item.formato}</div>
                  <div>{item.sumilla.sumilla}</div>
                  <a href={item.url}>{item.url}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
