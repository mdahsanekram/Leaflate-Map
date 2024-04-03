import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = ({ map }) => {
  console.log(map)
  const layerGroupRef = useRef(null);

  useEffect(() => {
    if (layerGroupRef.current && map) {
      console.log("AHsan")
      // Create a layer group for markers
      const markerGroup = L.layerGroup();

      // Add markers to the layer group
      L.marker([51.5, -0.09]).addTo(markerGroup).bindPopup('Marker 1');
      L.marker([51.51, -0.1]).addTo(markerGroup).bindPopup('Marker 2');

      // Add the marker group to the map
      markerGroup.addTo(map);

      // Create an overlay layer for the marker group
      const overlays = {
        'Marker Group': markerGroup,
      };

      // Create a layers control and add the overlay layer
      L.control.layers(null, overlays).addTo(map);
    }
  }, [map]);

  return null; // Since the map container is already initialized, we don't need to render anything here
};

export default MapComponent;
