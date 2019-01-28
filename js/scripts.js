$(document).ready(function(){

  $('button').delay(1100).hide().show(1000);
  $('#rowa').delay(2100).hide(500);


$("button").click(function(){
  var random = Math.floor(Math.random() * $('#rowa').length);
    $('#rowa').eq(random).show(1000);  

})






});
