import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "c/layout/Layout"
import "./News.css"

export default ({ data }) => {
  const dataList = data.allContentfulNoticias.nodes
  return (
    <Layout type="page" className="news">
      <h1>NOTICIAS</h1>
      <div className="news-list">
        {dataList.map((item, i) => (
          <Link key={i} className="news-item" to={`/noticias/${item.slug}`}>
            <img
              className="news-item-cover"
              src={item.portada.file.url}
              alt="x"
            />
            <h2 className="news-item-title">{item.titulo}</h2>
            <div className="news-item-date">{item.fecha}</div>
            <div className="news-item-excerpt">
              {item.texto.childMarkdownRemark.excerpt}
            </div>
            <div className="news-item-link">Leer noticia</div>
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
