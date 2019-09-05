import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "c/layout/Layout"

export default ({ data, pageContext }) => {
  const dataList = data.allContentfulNoticias.nodes
  return (
    <Layout type="page" className="news">
      <h1>Noticias</h1>
      <ul>
        {dataList.map((item, i) => (
          <Link key={i} className="news-item" to={`/noticias/${item.slug}`}>
            <h2 className="title">{item.titulo}</h2>
            <div className="item-date">{item.fecha}</div>
            <img src={item.portada.file.url} alt="x" />
            <div className="item-excerpt">
              {item.texto.childMarkdownRemark.excerpt}
            </div>
          </Link>
        ))}
      </ul>
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
