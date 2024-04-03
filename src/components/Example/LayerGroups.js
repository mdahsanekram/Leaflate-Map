import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MapComponent from '../../MapComponent';

function LayerGroups(props) {

  const mapRef = useRef(null);
  var century21icon = L.icon({
    iconUrl: 'Images/location.svg',
    iconSize: [40, 40]
  });

  useEffect(() => {
    var littleton = L.marker([39.61, -105.02], { icon: century21icon }).bindPopup('This is Littleton, CO.'),
      denver = L.marker([39.74, -104.99], { icon: century21icon }).bindPopup('This is Denver, CO.'),
      aurora = L.marker([39.73, -104.8], { icon: century21icon }).bindPopup('This is Aurora, CO.'),
      golden = L.marker([39.77, -105.23], { icon: century21icon }).bindPopup('This is Golden, CO.');
      var circle = L.circle([39.508, -106.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    })
    var cities = L.layerGroup([littleton, denver, aurora, golden,circle]);
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
    });

    if (mapRef.current) {
      console.log(mapRef)
      const map = L.map(mapRef.current, {
        center: [39.73, -104.99],
        zoom: 10,
        layers: [osm, cities]
      });

      return () => map.remove(); // Clean up map instance when component unmounts
    }
  }, []);

  return (
    <div style={{ height: '700px' }}>
      <div ref={mapRef} style={{ height: '100%' }} />
      {console.log(mapRef)}
      
      {mapRef?.current && <MapComponent map={mapRef?.current?.leafletElement} >
      </MapComponent>}
    </div>
  )
}
export default LayerGroups
