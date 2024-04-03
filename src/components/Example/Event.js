import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import {icon} from '../icon';


function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [adderss, setAdddress]=useState("")
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
          const data=  axios(`https://us1.locationiq.com/v1/reverse?key=pk.a9cf6a243d8c7a3198f22f564e9f190b&lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json`)
            data.then(res=>setAdddress(res.data.display_name))
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}
        icon={icon}
        >
            <Popup>I am here : <br></br>
            {adderss}
            </Popup>
        </Marker>
    );
}

function Event() {
    return (
        <MapContainer
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={20}
            scrollWheelZoom={false}
            style={{ height: '700px' }}
        >
            <TileLayer
                //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    )
}

export default Event
