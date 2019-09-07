

function toggleMenu(event) {
  event.stopPropagation();
  $('.categories').hide(); // Hide all panels
  $('#subcategory').show(); // Show 1st panel
  $('#menu').toggle();
  // $("#dropdown").one("click", function() {
  //   event.stopPropagation();
  //   console.log("clicked");
    
  // })

  window.addEventListener("click", function(e) {
    console.log("triggered the one time event")
    console.log(!event.target.matches('#dropdown'));
    console.log(!event.target.matches('#subcategory'));
    if (!event.target.matches('#dropdown') && 
        !event.target.matches('#subcategory')) {
          var cate = $('.categories');
          var men = $('#menu')
          if ($('#menu:visible')) {
            men.hide();
          }
          else {
            men.show();
          }
    }
  }, { once: true });
}

function toggleSubMenu(event, _this, show, reverse, _content) {
  event.stopPropagation()
  if (reverse == true) {
      $(_this).parent().hide("slide", { direction: "right" }, 500);
      $(show).show("slide", { direction: "left" }, 500);
      $(".contents").show("slide", { direction: "left" }, 500);
  } else {
      $(_this).parent().hide("slide", { direction: "left" }, 500);
      $(show).show("slide", { direction: "right" }, 500);

      $(".contents").not(_content).hide("slide", { direction: "right" }, 500);
      console.log($(show).show("slide", { direction: "right" }, 500));
  }
}

function displayContent(_this) {
  var elementText = $(_this).text();
  $('#content').text(elementText);
}
