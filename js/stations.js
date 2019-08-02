class Station
{
    getData(MyMap, map, markers)
    {
        let data = [];

        $.getJSON("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=0cc7beca8ea42259f8a1783a66d0f20c602be69d", function (stations) {
           stations.forEach(function (station){
               data.push(station);
               let marker = MyMap.createMarker(station);
               markers.addLayer(marker);
           });
        });
       return markers;
    }
}

