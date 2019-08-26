class MyMap {
    key="pk.eyJ1IjoiamF4eDc0IiwiYSI6ImNqeThmNno5bzA4dnIzb29meDhqaXMxZnEifQ.6KLIJuqWcahvJm0G3zCeXA";
    lat="45.757620581029435";
    lng="4.8318493366241455";
    zoom="13";
    init() {
//Fond de carte//

        let tiles = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: this.key
        });

//infos carte et zoom//

        let latlng = L.latLng(this.lat, this.lng);
        //return leaflet map object
        return L.map('mymap', {
            center: latlng,
            zoom: this.zoom,
            layers: [tiles]
        });
    }
}