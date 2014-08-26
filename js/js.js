$(document).ready(function(){
 $(window).scroll(function(){
  var wTop=$(this).scrollTop(),
  wHeight=$(this).height();
  $('.content article').each(function(){
   var aPos=$(this).offset().top,
   aHeight=$(this).height(),
   aLink=$(this).attr('id');
        if(wTop+$('header').height()+wHeight/2>aPos && wTop+$('header').height()<aPos+aHeight){
         $('[data-active="'+aLink+'"]').addClass('active');
        }
        else{
         $('[data-active="'+aLink+'"]').removeClass('active');
        }
      });
 });
});
