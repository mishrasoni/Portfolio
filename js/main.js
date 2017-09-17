/**
 * Created by audrey on 17/09/17.
 */
$(document).ready(function () {
	$('button').click(function(){
		$('button').toggleClass('active');
		$('.title').toggleClass('active');
		$('nav').toggleClass('active');
	});
});