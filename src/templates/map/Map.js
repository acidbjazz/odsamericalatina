import React, { useState } from "react"
import Layout from "t/layout/Layout"
import Leaflet from "c/Leaflet"
import "./Map.css"

export default ({ data }) => {
  const [countryData, setCountryData] = useState(null)
  const showCountryData = data => {
    setCountryData(data)
  }
  console.log("data:", data)
  console.log("countryData:", countryData)

  return (
    <Layout type="app" className="map">
      <Leaflet
        className="map-leaflet"
        data={data.nodes}
        showCountryData={showCountryData}
        center={[5, -50]}
        zoom={4}
        zoomControl={false}
        minZoom={3}
        maxZoom={5}
      />
      {/* {countryData ? ( */}
      <div className="map-data">
        <div
          dangerouslySetInnerHTML={{
            __html: countryData,
          }}
        />
      </div>
      {/* ) : (
        <div className="map-data wait">
          Texto inicial: indicaciones de uso y/o de que va la sección, que datos
          se pueden obtener aquí
        </div>
      )} */}
    </Layout>
  )
}
