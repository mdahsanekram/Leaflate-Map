import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const EventHandlingComponent = ({ map }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (map) {
      // Create a marker and add it to the map
      const marker = L.marker([51.5, -0.09]).addTo(map);
      marker.bindPopup('Marker clicked!');

      // Save the marker instance in the ref
      markerRef.current = marker;

      // Event handling for marker click
      marker.on('click', handleMarkerClick);
    }

    return () => {
      // Clean up event listener when component unmounts
      if (markerRef.current) {
        markerRef.current.off('click', handleMarkerClick);
      }
    };
  }, [map]);

  const handleMarkerClick = () => {
    alert('Marker clicked!');
  };

  return null; // Since we're not rendering anything, return null
};

export default EventHandlingComponent;
