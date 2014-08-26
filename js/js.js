$(document).ready(function(){
  $('.content article').each(function(){
   var thisA=$(this),
    articlePos=thisA.offset.top();
      $(window).scroll(function(){
        var wTop=$(this).scrollTop();
        if(wTop>articlePos){
          thisA.addClass('active');
        }
      });
  });
});
