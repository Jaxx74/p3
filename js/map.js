console.log("map");



class Map {
    init() {


//icone du marker//
        let bikeIcon = L.icon({
            iconUrl: '../pictures-/bike_map_marker3.png',


            iconSize: [50, 50], // size of the icon
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

//Fond de carte//

        let tiles = L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
            //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiamF4eDc0IiwiYSI6ImNqeThmNno5bzA4dnIzb29meDhqaXMxZnEifQ.6KLIJuqWcahvJm0G3zCeXA'
        });


//infos carte et zoom//


        let latlng = L.latLng(45.757620581029435, 4.8318493366241455);
        var map = L.map('mymap', {
            center: latlng,
            zoom: 13,
            layers: [tiles]
        });


//ajout des stations et des clusters//


        let markers = L.markerClusterGroup()

        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=0cc7beca8ea42259f8a1783a66d0f20c602be69d", function (reponse) {
            let stations = JSON.parse(reponse);

            stations.forEach(function (station) {

                let marker = L.marker([station.position.lat, station.position.lng], {
                    icon: bikeIcon
                });
                markers.addLayer(marker);
            });
            map.addLayer(markers);
        });
    }
}