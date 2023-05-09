import { LatLngExpression } from 'leaflet'
import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap, } from 'react-leaflet'
import "leaflet/dist/leaflet.css"





const UbicacionMapComponent = () => {

  const position: LatLngExpression = [51.505, -0.09]

  return (
    <div className='leaflet-container'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} />
      </MapContainer>
    </div>

  )
}

export default UbicacionMapComponent