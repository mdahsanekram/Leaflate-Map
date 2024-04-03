import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import {icon} from '../icon';
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import axios from "axios";

const center = [45.269169177925754, -0.5231516014256281];
const purpleOptions = { color: "white" };


// search on Map function
const LeafletgeoSearch = () => {
    const map = useMap();
    useEffect(() => {
        const provider = new OpenStreetMapProvider();
        console.log(provider)
       
        const searchControl = new GeoSearchControl({
            provider,
            marker: {
                icon:icon
            }
        });
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    return null;
}

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [adderss, setAdddress] = useState("")
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            const data = axios(`https://us1.locationiq.com/v1/reverse?key=pk.a9cf6a243d8c7a3198f22f564e9f190b&lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json`)
            data.then(res => setAdddress(res.data.display_name))
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

const SearchMap = () => {

    return (
        <div id="mapid">
            <MapContainer
                center={center}
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: "100vh" }}
            >
                <TileLayer
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                    subdomains={['mt1', 'mt2', 'mt3']}
                />
                <LeafletgeoSearch />
                <LocationMarker />
            </MapContainer>
        </div>
    );
}
export default SearchMap;
