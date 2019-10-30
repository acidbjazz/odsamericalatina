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
  const topics = ["Economía", "Instituciones", "Territorio"]
  return (
    <Layout type="page" className="resources" title="Recursos">
      <h1>RECURSOS</h1>
      <div className="resources-list">
        {data.group.map((itemCountry, i) => (
          <div className="resources-country" key={i}>
            <h2>{itemCountry.fieldValue}</h2>
            <div className="resources-topics">
              {topics.map((itemTopic, j) => (
                <div className="resources-topic" key={j}>
                  <h3>{itemTopic}</h3>
                  {groupByTematica(itemCountry.nodes)[itemTopic]
                    ? groupByTematica(itemCountry.nodes)[itemTopic].map(
                        (item, i) => (
                          <div
                            className={
                              item.destacado
                                ? "resource card featured"
                                : "resource card"
                            }
                            key={i}
                          >
                            <h4 className="resource-title">{item.titulo}</h4>
                            <em className="resource-format">{item.formato}</em>
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
