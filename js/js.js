$(document).ready(function(){
 var headerH=$('header').height();
 $(window).scroll(function(){
  var wTop=$(this).scrollTop(),
  wHeight=$(this).height();
  $('.content article').each(function(){
   var aPos=$(this).offset().top,
   aHeight=$(this).height(),
   aLink=$(this).attr('id');
        if(wTop+headerH>=aPos && wTop+headerH<=aPos+aHeight){
         $('[data-active="'+aLink+'"]').addClass('active');
        }
        else{
         $('[data-active="'+aLink+'"]').removeClass('active');
        }
        if(wTop+$('header').height()+wHeight/2>=aPos && wTop+$('header').height()+wHeight/2<=aPos+aHeight){
         $('[data-active="'+aLink+'"]').addClass('active1');
        }
        else{
         $('[data-active="'+aLink+'"]').removeClass('active1');
        }
      });
 });
 $('[data-active]').click(function(){
  var aScroll=$(this).attr('data-active'),
  aScrollPos=$('#'+aScroll).offset().top;
  $('html, body').animate({scrollTop: aScrollPos-headerH}, 500);
 });
});
