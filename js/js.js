$(document).ready(function(){
 $(window).scroll(function(){
  var wTop=$(this).scrollTop();
  $('.content article').each(function(){
   var aPos=$(this).offset().top;
        if(wTop+$('header').height()>aPos){
         $(this).addClass('active');
        }
        else{
         $(this).removeClass('active');
        }
      });
 });
});
