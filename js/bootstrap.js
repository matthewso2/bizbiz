
// DROPDOWN MENU DOESNT DISAPPEAR AFTER CLICK SCRIPT

$('.click-stay').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass('show');
    });
  
  
    return false;
  });

// MENU SLIDE SELECTED SCRIPT
 
$('#equip-products').on('click', function(e){

    $(".eqp-grp").css("display", "block");
    $('#ep-sub').show().animate({
        right: '100%',
        width: '130%'
    }, 150);

    $('.dropdown-item').delay(150).hide();
});


$('#expertise').click(function(){

  $(".ex-grp").css("display", "block");
  $('#ex-sub').show().animate({
      right: '100%',
      width: '130%'
  }, 150);

  $('.dropdown-item').delay(150).hide();
  
});

$('#human-resources').click(function(){

  $(".hr-grp").css("display", "block");
  $('#hr-sub').show().animate({
      right: '100%',
      width: '130%'
  }, 150);

  $('.dropdown-item').delay(150).hide();
  
});

$('#real-estate').click(function(){

  $(".re-grp").css("display", "block");
  $('#re-sub').show().animate({
      right: '100%',
      width: '130%'
  }, 150);

  $('.dropdown-item').delay(150).hide();
  
});

// BACK MENU SCRIPT

$('#eqp-back').on('click', function(e) {

  $(".dropdown-item").css("display", "block");
  $('.dropdown-item').show().animate({
      left: '100%',
      width: '100%'
  }, 150);

  $('#ep-sub').delay(150).hide();
});

$('#exp-back').click(function(){

  $(".dropdown-item").css("display", "block");
  $('.dropdown-item').show().animate({
      left: '100%',
      width: '100%'
  }, 150);

  $('#ex-sub').delay(150).hide();
});

$('#hr-back').click(function(){

  $(".dropdown-item").css("display", "block");
  $('.dropdown-item').show().animate({
      left: '100%',
      width: '100%'
  }, 150);

  $('#hr-sub').delay(150).hide();
});

$('#re-back').click(function(){

  $(".dropdown-item").css("display", "block");
  $('.dropdown-item').show().animate({
      left: '100%',
      width: '100%'
  }, 150);

  $('#re-sub').delay(150).hide();
});