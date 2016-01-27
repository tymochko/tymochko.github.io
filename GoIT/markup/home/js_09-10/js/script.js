$(function() {
  //jCarousel code STARTS HERE
  $('.jcarousel').jcarousel({
    // Configuration goes here
  });

  $('.jcarousel').jcarousel({
    animation: {
      duration: 400,
      easing:   'linear',
      complete: function() {
      }
    }
  });

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });

  $('.jcarousel-pagination').jcarouselPagination({
    item: function(page) {
      return '<a href="#' + page + '">' + page + '</a>';
    }
  });
  //jCarousel code ENDS HERE

  //custom Select code STARTS HERE
  $('select.styled').customSelect();
  //custom Select code ENDS HERE

  //Three-level menu with animation STARTS HERE
  $( '.dropdown' ).hover(
    function(){
      $(this).children('.sub-menu').slideDown(200);
      $(this).addClass('dropdown-animated');
    },
    function(){
      $(this).children('.sub-menu').slideUp(200);
      $(this).removeClass('dropdown-animated');
    }
  );

  $( '.sub-menu' ).hover(
    function(){
      $(this).addClass('sub-menu-animated');
    },
    function(){
      $(this).removeClass('sub-menu-animated');
    }
  );
});

