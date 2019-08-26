class MyPopup
{
    getData(markers)
    {
        $.getJSON("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=0cc7beca8ea42259f8a1783a66d0f20c602be69d", function (stations) {
            console.log (stations);
            stations.forEach(function (station){
                //marker.bindPopup(station.name).openPopup();

                let popup = L.popup()
                    .setLatLng([station.position.lat, station.position.lng])
                    .setContent(station.name)
                    .openOn(map);

            });
        });
        return markers;
    }
}