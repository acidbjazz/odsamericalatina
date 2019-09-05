import React from "react"
import { graphql } from "gatsby"
import Map from "t/map/Map"

export default ({ data }) => {
  return <Map data={data.allContentfulMapa} />
}

export const MapQuery = graphql`
  query {
    allContentfulMapa(sort: { fields: pais }) {
      nodes {
        pais
        coordenadas {
          lat
          lon
        }
        texto {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
