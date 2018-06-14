$(document).ready(function(){

  $('button').delay(1100).hide().show(1000);
  $('#rowa').delay(2100).hide(500);


$("button").click(function(){
  alert("All you will be doing here is clicking");

})

$.fn.random = function() {
return this.eq(Math.floor(Math.random() * this.length));
}

$("button").random().show();




});
