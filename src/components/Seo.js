import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Cover from "i/cover.jpg"

export default ({ title = null, cover = null }) => {
  const seoQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            site
            description
            url
            author
          }
        }
      }
    `
  )
  const data = seoQuery.site.siteMetadata
  const _site = data.site
  const _url = data.url
  const _description = data.description
  const _title = title ? `${title} | ${_site}` : _site
  const _cover = cover ? cover : `${_url} ${Cover}`
  return (
    <Helmet className="Seo">
      <meta property="og:title" content={_title} />
      <meta property="og:site_name" content={_site} />
      <meta property="og:url" content={_url} />
      <meta property="og:description" content={_description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_LA" />
      <meta property="og:image" content={_cover} />
      <title>{_title}</title>
      <meta name="description" content={_description} />
    </Helmet>
  )
}
