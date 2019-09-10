// import React, { Component } from "react"
// import { Map, Marker, Popup, TileLayer } from "react-leaflet"

// export default class MyMap extends Component {
//   render() {
//     // const { options } = this.props
//     const position = [-5, -83]
//     if (typeof window !== "undefined") {
//       return (
//         <Map className="xyz" center={position} zoom={5}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={position}>
//             <Popup>
//               A pretty CSS3 popup.
//               <br />
//               Easily customizable.
//             </Popup>
//           </Marker>
//         </Map>
//       )
//     }
//     return null
//   }
// }

import React from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

export default ({ className, center, zoom }) => {
  return typeof window !== "undefined" ? (
    <Map className={className} center={center} zoom={zoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  ) : null
}
