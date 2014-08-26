$(document).ready(function(){
 $(window).scroll(function(){
  var wTop=$(this).scrollTop();
  $('.content article').each(function(){
   var aPos=$(this).offset().top;
        if(wTop>aPos){
          $(this).addClass('active');
        }
      });
 });
});
