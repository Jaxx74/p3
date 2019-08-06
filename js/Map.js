class Map {
    init() {
//Fond de carte//

        let tiles = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            //attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiamF4eDc0IiwiYSI6ImNqeThmNno5bzA4dnIzb29meDhqaXMxZnEifQ.6KLIJuqWcahvJm0G3zCeXA'
        });

//infos carte et zoom//

        let latlng = L.latLng(45.757620581029435, 4.8318493366241455);
        //return leaflet map abject
        return L.map('mymap', {
            center: latlng,
            zoom: 13,
            layers: [tiles]
        });
    }


}