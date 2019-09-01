/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("mainDropdown").classList.toggle("show");
  // document.getElementsByClassName("submenu").classList.toggle("show");
  console.log(document.getElementsByClassName('submenu'));
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// Selected animation script

function menuAnimation(showElement, hideElement) {
  $(showElement).css('width', 'unset');
  $(showElement).css('right', 'unset');
  $(showElement).css('left', 'unset');
	$(showElement).css({visibility: "visible"}).animate({
		right: '100%',
		width: '50%'
  }, 150);

  $(hideElement).css('width', 'unset');
  $(hideElement).css('right', 'unset');
  $(hideElement).css('left', 'unset');
  $(hideElement).animate({
  right: '100%',
  width: '100%'
	}, 150).css({visibility: "hidden"}, 150);
}