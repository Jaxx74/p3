class Station
{
    getData(markers)
    {
        $.getJSON("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=0cc7beca8ea42259f8a1783a66d0f20c602be69d", function (stations) {
           stations.forEach(function (station){

               let myMarker = new MyMarker();
               let marker = myMarker.create(station);
               markers.addLayer(marker);
           });
        });
       return markers;
    }
}

