import L from 'leaflet';
// export  const icon=L.icon({
//     iconUrl: 'Images/location.svg',
//     iconSize: [40, 40]
//     })
export  const icon=L.icon({
    // iconUrl: 'Images/location.svg',
    // iconSize: [40, 40]
    iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    // iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});