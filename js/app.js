let markers = L.markerClusterGroup();

let MyMap = new Map();
let map = MyMap.init();

let station = new Station();
station.getData(markers);

map.addLayer(markers);


