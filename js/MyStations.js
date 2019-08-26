class Station {
    getData(markers)
    {
        $.getJSON("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=0cc7beca8ea42259f8a1783a66d0f20c602be69d", function (stations) {
            console.log (stations);
           stations.forEach(function (station){


               let myMarker = new MyMarker();
               let marker = myMarker.create(station);
               let popup = L.popup()
                   .setLatLng(station.position)

               markers.addLayer(marker);
               //Infobulles stations
                // affectation de l'événement au survol
               marker.on('mouseover', function (e) {
                   popup.setContent(station.name)
                   this.bindPopup(popup).openPopup();
               });
                // affectation de l'événement au sortir
               marker.on('mouseout', function (e) {
                   this.togglePopup();
               });

           });
        });
       return markers;
    }
}
