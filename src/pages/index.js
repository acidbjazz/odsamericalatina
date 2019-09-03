import React from "react"
import { graphql } from "gatsby"
import Home from "t/home/Home"

export default ({ data }) => {
  return <Home data={data.contentfulInicio} />
}

export const homeQuery = graphql`
  query {
    contentfulInicio {
      videoPrincipal {
        video {
          file {
            url
          }
        }
      }
      odss {
        contentfulid
        nombre
        videos {
          titulo
          portada {
            file {
              url
            }
          }
          video {
            file {
              url
            }
          }
        }
      }
    }
  }
`
