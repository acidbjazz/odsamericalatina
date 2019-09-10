import React from "react"
import Layout from "c/layout/Layout"
// import GoogleMaps from "c/GoogleMaps"
import Leaflet from "c/Leaflet"
import "./Map.css"

export default ({ data }) => {
  // const [state, setState] = useState(false)
  return (
    <Layout type="page" className="map">
      <Leaflet className="map-leaflet" center={[-5, -83]} zoom={4} />
      <ul className="list">
        {data.nodes.map((item, i) => (
          <li key={i}>
            <h2>{item.pais}</h2>
            <div>
              coordenadas: {item.coordenadas.lat},{item.coordenadas.lon}
            </div>
            <main
              className="article-main"
              dangerouslySetInnerHTML={{
                __html: item.texto.childMarkdownRemark.html,
              }}
            />
          </li>
        ))}
      </ul>
    </Layout>
  )
}
