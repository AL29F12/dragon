// JavaScript Document
 $(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('.button').tap(function(){
    navigator.notification.vibrate(500);
	});
	
	$('.button2').tap(function(){
	 navigator.notification.beep(1);
   });
   
 },false); //deviceready
}); //document ready
