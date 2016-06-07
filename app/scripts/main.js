(function($){
  'use strict';

//alert("howdy");

  $(function(){

    $('.container ul li').click(function(){
      $('.container ul li ul li').animate({
        height: "toggle"
      });



  });
});

// TO DO:
// add classes to respective menu headings or figure out how to otherwise select
//   using siblings, etc.
// identify other menu headings as not active and close their drop-down menus
//   and set background color
// control so that only one drop-down can appear at a time with conditional statement
// style



}(jQuery));
