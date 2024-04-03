import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'
import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function getBounds(props) {
  return L.latLng(props.center).toBounds(props.size)
}



function Square(props) {
  console.log(center)
  const context = useLeafletContext()
  const squareRef = useRef()
  const propsRef = useRef(props)

  useEffect(() => {
    squareRef.current = new L.Rectangle(getBounds(props))
    const container = context.layerContainer || context.map
    container.addLayer(squareRef.current)

    return () => {
      container.removeLayer(squareRef.current)
    }
  }, [])

  useEffect(() => {
    if (
      props.center !== propsRef.current.center ||
      props.size !== propsRef.current.size
    ) {
      squareRef.current.setBounds(getBounds(props))
    }
    propsRef.current = props
  }, [props.center, props.size])

  return null
}

const center = [51.505, -0.09]

function MyMap() {
  return (
    <MapContainer center={center} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Square center={center} size={1000} />
    </MapContainer>
  )
}
export default MyMap
