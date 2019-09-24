import React from "react"
import { graphql } from "gatsby"
import Project from "t/project/Project"

export default ({ data }) => {
  return <Project data={data.contentfulElProyecto} />
}

export const ProjectQuery = graphql`
  query {
    contentfulElProyecto {
      texto {
        childMarkdownRemark {
          html
        }
      }
      creditos {
        childMarkdownRemark {
          html
        }
      }
      odss {
        contentfulid
        nombre
        icono {
          file {
            url
          }
        }
        descripcion {
          descripcion
        }
        url
        videos {
          titulo
        }
      }
    }
  }
`
