$(document).ready(function(){
  
  $('.has-sub > a, .back').click(function(){
    
    $('.nav').toggleClass('active');    
    
    return false;
  });
  
});