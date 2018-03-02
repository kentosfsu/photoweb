$(function() {
  // $('#submenu').fadeIn(1500);

  $('#photo_menu').hover(
    function() {
      $('#submenu').fadeIn();
    },
    function() {
      $('#submenu').fadeOut();
    }
  );

});