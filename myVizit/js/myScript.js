"use strict"




$(document).ready(function() {
$(window).scroll(()=>{
  let  scrollDistance = $(window).scrollTop();

  $(".logo1").each((i, el)=>{

    if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
      $("nav a").each((i, el)=>{
        if ($(el).hasClass("active")){
          $(el).removeClass("active");
        }
      });
      $('nav li:eq('+ i +')').find('a').addClass('active');
    }
  });
});
});

$('a[href^="#"]').click(function(){
  let valHref = $(this).attr("href");
  $('html, body').animate ({scrollTop: $(valHref).offset().top - 100 + "px"});
}); 




/*onchange.OnChange = function () {
  var type = document.getElementById('type').value
  var design = $('input[name="design"]:checked').val();
  var adapt = document.getElementById('adaptation').value
  calcAll.onclick = function() {
    /*РАСЧЁТ МАНЕЙ*/
   /* var calc = 0;

    /*расчёт типа*/
   /* if (type == 1){
      calc = calc + 2000;}
    if (type == 2){
      calc = calc + 1000;}

    /*расчёт дезигна*/
   /* if (design == 2) {
      calc = calc + 2000;} 

    /*расчёт адаптации*/
   /* if (adapt ==1) {
      calc = calc + 1000;;} 
    if (adaptation ==2) {
      calc = calc + 1000;} 
    if (adaptation ==3) {
      calc = calc + 2000;}

    document.getElementById("calc").innerHTML = calc;
  };
};*/

function OnFunction(val){
  var type = document.getElementById('type').value
  var design = $('input[name="design"]:checked').val();
  var adapt = document.getElementById('adaptation').value
  calcAll.onclick = function() {
    /*РАСЧЁТ МАНЕЙ*/
    var calc = 0;

    /*расчёт типа*/
    if (type == 1){
      calc = calc + 2000;}
    if (type == 2){
      calc = calc + 1000;}

    /*расчёт дезигна*/
    if (design == 2) {
      calc = calc + 2000;} 

    /*расчёт адаптации*/
    if (adapt ==1) {
      calc = calc + 1000;;} 
    if (adaptation ==2) {
      calc = calc + 1000;} 
    if (adaptation ==3) {
      calc = calc + 2000;}

    document.getElementById("calc").innerHTML = calc;
  };
}

