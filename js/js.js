$(document).ready(function(){
  $('.content article').each(function(){
   var thisA=$(this),
    articlePos=this.offset.top;
      $(window).scroll(function(){
        var wTop=$(this).scrollTop();
        if(wTop>articlePos){
          this.addClass('active');
        }
      });
  });
});
