$(document).ready(function(){
 $(window).scroll(function(){
  var wTop=$(this).scrollTop();
  $('.content article').each(function(){
   var $(this).offset.top();
        if(wTop>articlePos){
          thisA.addClass('active');
        }
      });
 });
});
