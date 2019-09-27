//  Dropdown Menu and click outside Dropdown Menu Function

function toggleMenu(event) {
  event.stopPropagation();
  $('#menu').toggle();

  window.addEventListener("click", function(e) {
    if (!event.target.matches('#dropdown') || 
        !event.target.matches('.categories')) {
          var cate = $('.categories');
          var men = $('#menu')
          if ($('#menu:visible') && $('.categories:visible')) {
            $('#menu').toggle();
          }
    }
  }, { once: true });

}

// SubMenu Selected Slide Function

function toggleSubMenu(event, _this, show, reverse, _content) {
  
  event.stopPropagation()
  if (reverse == true) {
      $(_this).parent().hide("slide", { direction: "right" }, 500);
      $(show).show("slide", { direction: "left" }, 500);
      
      $(_content).hide();
      $(_content).parent().contents().show("slide", { direction: "left" }, 500);
  } else {
      $(_this).parent().hide("slide", { direction: "left" }, 500);
      $(show).show("slide", { direction: "right" }, 500);

      console.log($(_content).siblings());
      $(_content).siblings().hide("slide", { direction: "right" }, 500);
      $(_content).show("slide", { direction: "left" }, 500);
      
  }
}

// Electronics Menu
var text = "<ul>";
text += "</ul>";

var air = [
  "Air-Vac DRS 16"
]
air.forEach(divFunction);


var emotor = [
  "moteurs électriques à courant continu ( CC ou 'DC')",
  "Direct current (DC) electric motors",
  "Les moteurs électriques à courant alternatif (CA ou 'AC') et à courant continu (DC)",
  "Alternating current (AC) and direct current (DC) electric motors",
  "Moteurs moyenne tension",
  "Medium voltage motors"
]
emotor.forEach(divFunction);

function divFunction(item) {

document.getElementById("electricmotor").innerHTML += "<div>" + item + "</div>"; 

}
