$(document).ready(function(){
 $(window).scroll(function(){
  var wTop=$(this).scrollTop(),
  wHeight=$(this).height();
  $('.content article').each(function(){
   var aPos=$(this).offset().top,
   aHeight=$(this).height();
        if(wTop+$('header').height()+wHeight/2>aPos && wTop+$('header').height()+wHeight/2<aPos+aHeight){
         $(this).addClass('active');
        }
        else{
         $(this).removeClass('active');
        }
      });
 });
});
