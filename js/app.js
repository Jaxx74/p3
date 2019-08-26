let markers = L.markerClusterGroup();

let newMap = new MyMap();
let map = newMap.init();

let station = new Station();
station.getData(markers);

map.addLayer(markers);


