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