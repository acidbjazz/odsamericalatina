import React from "react"
import { graphql } from "gatsby"
import Layout from "t/layout/Layout"
import "./NewsArticle.css"

export default ({ data }) => {
  const dataList = data.contentfulNoticias
  return (
    <Layout
      type="page"
      className="news-article"
      title={dataList.titulo}
      cover={dataList.portada.file.url}
    >
      <h1>NOTICIAS</h1>
      <h2 className="news-article-title">{dataList.titulo}</h2>
      <div className="news-article-date">{dataList.fecha}</div>
      <img
        className="news-article-cover"
        src={dataList.portada.file.url}
        alt="x"
      />
      <div
        className="news-article-text"
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
