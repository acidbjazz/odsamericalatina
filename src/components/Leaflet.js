import React from "react"
import { Map, Marker, GeoJSON } from "react-leaflet"
import Countries from "t/map/countries.geo.json"

export default ({
  className,
  data,
  showCountryData,
  center,
  zoom,
  zoomControl,
  minZoom,
  maxZoom,
}) => {
  return typeof window !== "undefined" ? (
    <Map
      className={className}
      data={data}
      center={center}
      zoom={zoom}
      zoomControl={zoomControl}
      minZoom={minZoom}
      maxZoom={maxZoom}
    >
      <GeoJSON
        data={Countries}
        style={() => ({
          color: "#4d4d4d",
          weight: 1,
          opacity: 0.5,
          fillColor: "#ededed",
          dashArray: 3,
          fillOpacity: 0.5,
        })}
        interactive={false}
      />

      {data.map((item, i) => (
        <Marker
          key={i}
          position={[item.coordenadas.lat, item.coordenadas.lon]}
          onClick={() => showCountryData(item.texto.childMarkdownRemark.html)}
        />
      ))}
    </Map>
  ) : null
}
