
$('.dropdown-menu a.dropdown-item').on('click', function(e) {
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

$('.eqp-grp').hide()
$('#equip-products').click(function(){

    const old = $('.eqp-grp').show();
    const left = $('.dropdown-item').hide();
    
    
    //  const old = $('.eqp-grp').animate({ right: '251.14px'});
    //  const left = $('.dropdown-item').animate({ right: '251.14px' });
});
