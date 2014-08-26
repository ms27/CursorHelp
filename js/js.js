$(document).ready(function(){
 $(window).scroll(function(){
  var wTop=$(this).scrollTop(),
  wHeight=$(this).height();
  $('.content article').each(function(){
   var aPos=$(this).offset().top;
        if(wTop+$('header').height()+wHeight()/2>aPos){
         $(this).addClass('active');
        }
        else{
         $(this).removeClass('active');
        }
      });
 });
});
