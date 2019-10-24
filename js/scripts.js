$(document).ready(function(){

  $('span').delay(1100).hide().show(1000);
  $('.flexContainer2').delay(2100).hide(500);
  // alert("Press a button and see your luck");


$("span").click(function(){
  var random = Math.floor(Math.random() * $('.flexContainer2').length);
    $('.flexContainer2').eq(random).show(1000).hide(2000);  
    
})








});
