import React from "react"
import { graphql } from "gatsby"
import Layout from "c/layout/Layout"

export default ({ data, pageContext }) => {
  const dataList = data.contentfulNoticias
  return (
    <Layout type="page" className="news">
      <h1>Noticias</h1>
      <h2 className="title">{dataList.titulo}</h2>
      <div className="item-date">{dataList.fecha}</div>
      <img src={dataList.portada.file.url} alt="x" />
      <main
        className="article-main"
        dangerouslySetInnerHTML={{
          __html: dataList.texto.childMarkdownRemark.html,
        }}
      />
    </Layout>
  )
}

export const ComponentQuery = graphql`
  query opinionItemQuery($slug: String!) {
    contentfulNoticias(slug: { eq: $slug }) {
      titulo
      fecha
      portada {
        file {
          url
        }
      }
      texto {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
