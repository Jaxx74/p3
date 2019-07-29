//fonction pour le click sur les fleches
$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=200px" }, "slow" );
});
 
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=200px" }, "slow" );
});

//test2

$(function(){
  
  setInterval( function(){
    moveRight();
     }, 25000);
  
  
  var slideWidth = $('.slide').width();
  var slideHeight = $('.slide').height();
  var slideCount = $('.slide').length;
  var sliderTotalWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight});
  $('.slideshow').css({ width:sliderTotalWidth, marginLeft: -slideWidth });
  
  $('.slide:last-child').prependTo('.slideshow');
  
  function moveLeft(){
   
    $('.slideshow').animate({
      left: + slideWidth
    }, 200, function(){
      $('.slide:last-child').prependTo('.slideshow');
      $('.slideshow').css('left', '');
    });
  };
  
  function moveRight() {  
    $('.slideshow').animate({
      left: - slideWidth
    }, 200 , function(){
      
      $('.slide:first-child').appendTo('.slideshow');
      
      $('.slideshow').css('left','');
  });
   
    };

 
   
  $('a.left').click(function(){
   
    moveLeft();
         });
  $('a.right').click(function(){
     
    moveRight();
           });    
    
 
  
});


//test map clusters//

var map = L.map('cluster').setView([46.90296, 1.90925], 6);

var stamenToner = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});

map.addLayer(stamenToner);



var markersCluster = new L.MarkerClusterGroup();

var cities = getCities();
for (var i = 0; i < cities.length; i++) {
    var latLng = new L.LatLng(cities[i][1], cities[i][2]);
    var marker = new L.Marker(latLng, {title: cities[i][0]});
    markersCluster.addLayer(marker);
}

map.addLayer(markersCluster);