

function toggleMenu() {
  $('.panel').hide(); // Hide all panels
  $('#panel1').show(); // Show 1st panel
  $('#menu').toggle();
  // $('#content-main').toggle();
}

function toggleSubMenu(_this, show, reverse, _content) {
  if (reverse == true) {
      $(_this).parent().hide("slide", { direction: "right" }, 500);
      $(show).show("slide", { direction: "left" }, 500);
  } else {
      $(_this).parent().hide("slide", { direction: "left" }, 500);
      $(show).show("slide", { direction: "right" }, 500);
      $(_content).show("slide", { direction: "left" }, 500);
  }
}

function displayContent(_this) {
  var elementText = $(_this).text();
  $('#content').text(elementText);
}

// $('#dropdown').click(function(){
    
//   const name = $('#content-main ul li');

//   $("#content-main ul li").slideDown(500);
// });