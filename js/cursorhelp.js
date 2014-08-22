/*
 * CursorHelp v1.0 (21.9.14)
 * http://ms27.github.io/CursorHelp/
 *
 * Copyright 2014, Magomedov Said.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

$(document).ready(function (){
$('.cursorTitle').mouseenter(function(){
	var CursorHelp = $('#cursorTitle'),
	CH_Title =$(this).attr('data-title');
	CH_Config=$(this).attr('data-ch-config');
	CursorHelp.find('.TitleContent').html( CH_Title );
// стили
	if(CH_Config !== ''){
	CursorHelp.addClass(CH_Config);
	}
}).mousemove(function (e) {
	var CursorHelp = $('#cursorTitle'),
	windowH=$(window).height(),
	scrollTop = $(window).scrollTop();
	var cursorMargin = 30;
	var CH_TitleWidth=CursorHelp.outerWidth(),
	CH_TitleHeight =CursorHelp.outerHeight(),
	CH_MyConfig='';
	var CH_PosX = e.pageX-CH_TitleWidth/2,
	CH_PosY = e.pageY+cursorMargin-scrollTop,
	CH_CornerBox=CursorHelp.find('.TitleCorner'),
	CH_CornerBoxW = CH_CornerBox.outerWidth();
	CursorHelp.css({left : CH_PosX + 'px', top: CH_PosY + 'px'}).addClass('visible');
	CH_CornerBox.removeClass('top');
	CH_CornerBox.css({right : CH_TitleWidth/2-CH_CornerBoxW/2+'px'});
// если подсказка выходит за границу правого края окна браузера :
	if( (e.pageX+CH_TitleWidth/2) > $('body').width() ){
	CursorHelp.css({left : CH_PosX+$('body').width()-(e.pageX+CH_TitleWidth/2) + 'px'});
	CH_CornerBox.css({right : $('body').width()-e.pageX-CH_CornerBoxW/2 + 'px'});
	if( $('body').width() - CH_CornerBox.offset().left - CH_CornerBoxW < 4){
	CH_CornerBox.css({right : '2px'});
	}
	}
// если подсказка выходит за границу левого края
	var CH_Left = CursorHelp.offset().left;
	if( CH_Left < 0 ){
	CursorHelp.css({left : CH_PosX - CH_Left + 'px'});
	CH_CornerBox.css({left : e.pageX-CH_CornerBoxW/2-2 + 'px'});
	if(CH_CornerBox.offset().left < 4){
	CH_CornerBox.css({left : '4px'});
	}
	}
// если подсказка выходит за границу нижнего края окна браузера
	if( CH_PosY+CH_TitleHeight > windowH ){
	CursorHelp.css({top: CH_PosY-CH_TitleHeight-cursorMargin*2 + 'px'});
	CH_CornerBox.position().top;
	CH_CornerBox.addClass('top');
	}
// стили пользователя
	if (void 0 !== $(this).attr('data-sh-style')){
	CH_MyConfig=$(this).attr('data-ch-style');
	}
	if(CH_MyConfig !== ''){
	var CH_OldStyle = CursorHelp.attr('style');
	CursorHelp.attr('style', CH_OldStyle+CH_MyConfig);
	}
	
	CH_CornerBox.css({borderColor : CursorHelp.css('border-color'),backgroundColor:CursorHelp.css('background-color')});
// если курсор выходит за границы блока с подсказкой {left:'-9999px',top:'-9999px'}
}).mouseleave(function () {
	$('#cursorTitle').find('.TitleContent').html('');
	$('#cursorTitle').find('.TitleCorner').attr('style','');
	$('#cursorTitle').attr('style','').attr('class','');
});

});