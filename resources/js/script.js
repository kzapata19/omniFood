$(document).ready(function(){

  $('.js--section-features').waypoint(function(direction){
      if(direction == "down") {
        $('nav').addClass('sticky');
      } else {
        $('nav').remove('sticky');
      }
  }, { offset: '60px' });

});