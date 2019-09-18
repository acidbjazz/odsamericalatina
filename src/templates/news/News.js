import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "t/layout/Layout"
import "./News.css"

export default ({ data }) => {
  const dataList = data.allContentfulNoticias.nodes
  return (
    <Layout type="page" className="news" title="Noticias">
      <h1>NOTICIAS</h1>
      <div className="news-list">
        {dataList.map((item, i) => (
          <Link key={i} className="news-item" to={`/noticias/${item.slug}`}>
            <picture className="news-item-cover">
              <img
                className="news-item-cover-img"
                src={item.portada.file.url}
                alt="x"
              />
            </picture>
            <h3 className="news-item-title">{item.titulo}</h3>
            <div className="news-item-date">{item.fecha}</div>
            <div className="news-item-excerpt">
              {item.texto.childMarkdownRemark.excerpt}
            </div>
            <div className="go">Seguir Leyendo</div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const NewsQuery = graphql`
  query NewsQuery($skip: Int, $limit: Int) {
    allContentfulNoticias(
      sort: { fields: fecha, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        slug
        titulo
        fecha
        portada {
          file {
            url
          }
        }
        texto {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`
