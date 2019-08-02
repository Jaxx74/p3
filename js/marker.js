class Marker
{
    create(){
        let bikeIcon = L.icon({
            iconUrl: '../pictures-/bike_map_marker3.png',
            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        return L.marker([station.position.lat, station.position.lng], {
            icon: bikeIcon
        });
    }
}