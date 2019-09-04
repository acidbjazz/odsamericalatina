import React from "react"
import { graphql } from "gatsby"
import Resources from "t/resources/Resources"

export default ({ data }) => {
  return <Resources data={data.allContentfulRecursos} />
}

export const ResourcesQuery = graphql`
  query {
    allContentfulRecursos(sort: { fields: region, order: DESC }) {
      group(field: region) {
        fieldValue
        nodes {
          tematica
          titulo
          formato
          url
          sumilla {
            sumilla
          }
        }
      }
    }
  }
`
