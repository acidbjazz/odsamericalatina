import React, { useState } from "react"
import Layout from "t/layout/Layout"
import Leaflet from "c/Leaflet"
import Responsive from "c/Responsive"
import "./Map.css"

export default ({ data }) => {
  const [countryData, setCountryData] = useState(null)

  const showCountryData = data => {
    setCountryData(data)
  }

  const close = () => {
    setCountryData(null)
  }

  return (
    <Layout type="app" className="map">
      <div className="map-leaflet">
        <Responsive
          desktop={
            <Leaflet
              data={data.nodes}
              showCountryData={showCountryData}
              center={[5, -50]}
              zoom={4}
              zoomControl={false}
              minZoom={3}
              maxZoom={5}
            />
          }
          mobile={
            <Leaflet
              data={data.nodes}
              showCountryData={showCountryData}
              center={[15, -78]}
              zoom={3}
              zoomControl={false}
              minZoom={3}
              maxZoom={4}
            />
          }
        />
      </div>
      <div className="map-data">
        {countryData ? (
          <>
            <h1 className="map-data-title">País</h1>
            <button className="map-data-close" onClick={() => close()}>
              <i className="material-icons">close</i>
            </button>

            <div
              className="map-data-html"
              dangerouslySetInnerHTML={{
                __html: countryData,
              }}
            />
          </>
        ) : (
          <div className="map-data-welcome">
            Texto inicial: indicaciones de uso y/o de que va la sección, que
            datos se pueden obtener aquí
          </div>
        )}
      </div>
    </Layout>
  )
}
