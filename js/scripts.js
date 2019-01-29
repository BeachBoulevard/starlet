$(document).ready(function(){

  $('button').delay(1100).hide().show(1000);
  $('.flexContainer2').delay(2100).hide(500);


$("button").click(function(){
  var random = Math.floor(Math.random() * $('.flexContainer2').length);
    $('.flexContainer2').eq(random).show(1000).hide(1000);  
    
})






});
