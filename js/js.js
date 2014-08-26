$(document).ready(function(){
 $(window).scroll(function(){
  var wTop=$(this).scrollTop(),
  wHeight=$(this).height();
  $('.content article').each(function(){
   var aPos=$(this).offset()+wHeight()/2top;
        if(wTop+$('header').height()>aPos){
         $(this).addClass('active');
        }
        else{
         $(this).removeClass('active');
        }
      });
 });
});
