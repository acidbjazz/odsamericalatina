import React from "react"
import Layout from "t/layout/Layout"
import "./Resources.css"

export default ({ data }) => {
  const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key]
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
      return objectsByKeyValue
    }, {})
  const groupByTematica = groupBy("tematica")
  return (
    <Layout type="page" className="resources" title="Recursos">
      <h1>RECURSOS</h1>
      <div className="resources-list">
        {data.group.map((item, i) => (
          <div className="resources-country" key={i}>
            <h2>{item.fieldValue}</h2>
            <div className="resources-topics">
              <div>
                <h3>Economía</h3>
                {groupByTematica(item.nodes)["Economía"]
                  ? groupByTematica(item.nodes)["Economía"].map((item, i) => (
                      <div className="resource card" key={i}>
                        <h4 className="resource-title">{item.titulo}</h4>
                        <div className="resource-format">{item.formato}</div>
                        <div className="resource-abstract">
                          {item.sumilla.sumilla}
                        </div>
                        <a className="go" href={item.url}>
                          Ir al recurso
                        </a>
                      </div>
                    ))
                  : null}
              </div>
              <div>
                <h3>Institucionalidad</h3>
                {groupByTematica(item.nodes)["Instituciones"]
                  ? groupByTematica(item.nodes)["Instituciones"].map(
                      (item, i) => (
                        <div className="resource card" key={i}>
                          <h4 className="resource-title">{item.titulo}</h4>
                          <div className="resource-format">{item.formato}</div>
                          <div className="resource-abstract">
                            {item.sumilla.sumilla}
                          </div>
                          <a className="go" href={item.url}>
                            Ir al recurso
                          </a>
                        </div>
                      )
                    )
                  : null}
              </div>
              <div>
                <h3>Territorio</h3>
                {groupByTematica(item.nodes)["Territorio"]
                  ? groupByTematica(item.nodes)["Territorio"].map((item, i) => (
                      <div className="resource card" key={i}>
                        <h4 className="resource-title">{item.titulo}</h4>
                        <div className="resource-format">{item.formato}</div>
                        <div className="resource-abstract">
                          {item.sumilla.sumilla}
                        </div>
                        <a className="go" href={item.url}>
                          Ir al recurso
                        </a>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
