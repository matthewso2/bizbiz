//  Dropdown Menu and click outside Dropdown Menu Function

function toggleMenu(event) {
  event.stopPropagation();
  $('.categories').hide(); // Hide all panels
  $('#subcategory').show(); // Show 1st panel
  $('#menu').toggle();

  window.addEventListener("click", function(e) {
    if (!event.target.matches('#dropdown') || 
        !event.target.matches('.categories')) {
          var cate = $('.categories');
          var men = $('#menu')
          if ($('#menu:visible') && $('.categories:visible')) {
            men.hide();
            cate.hide();
          }
    }
  }, { once: true });

  if ($('#menu').is(':visible')) {
   $('.contents').show();
  }
}

// SubMenu Selected Slide Function

function toggleSubMenu(event, _this, show, reverse, _content) {
  console.log(_content);
  event.stopPropagation()
  if (reverse == true) {
      $(_this).parent().hide("slide", { direction: "right" }, 500);
      $(show).show("slide", { direction: "left" }, 500);
      
      $(".contents").hide();
      $(".contents").show("slide", { direction: "left" }, 500);
  } else {
      $(_this).parent().hide("slide", { direction: "left" }, 500);
      $(show).show("slide", { direction: "right" }, 500);

      $(".contents").hide("slide", { direction: "right" }, 500);
      $(_content).show("slide", { direction: "left" }, 500);

      // if (_content == "#electronics") {
      //   $("#aircompressor").hide();
      // }
      
  }
}

