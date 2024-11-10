$(function(){
   $('.menu-icon').click(function(){
    $('.main-menu').toggleClass('active');
    $('body').toggleClass('lock');
   });
   $('.fa-caret-down').click(function(){
      $('.submenu').toggleClass('submenu1');
     });
});



