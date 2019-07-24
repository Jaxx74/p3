console.log("map");

class Map {
    init() {

        let mymap = L.map('mymap').setView([45.6963425, 4.735948], 10);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiamF4eDc0IiwiYSI6ImNqeThmNno5bzA4dnIzb29meDhqaXMxZnEifQ.6KLIJuqWcahvJm0G3zCeXA'
        }).addTo(mymap);

        //marker//
        let bikeIcon = L.icon({
            iconUrl: '../html/pictures/bike_map_marker3.png',


            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });



        let marker = L.marker([45.6963425, 4.735948], {
            icon: bikeIcon
        }).addTo(mymap);
        L.marker([45.746957, 4.8368618], {
            icon: bikeIcon
        }).addTo(mymap);

    }
}
