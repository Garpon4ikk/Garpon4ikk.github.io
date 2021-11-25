"use strict"



/*var delayInMilliseconds = 30000;

setTimeout(function() {
  	if (confirm("Нужна помощь с выбором? Напищите мне!")) {
		window.location.href = 'https://www.google.com/' };
	  
}, delayInMilliseconds);

setTimeout(function(){
     clearInterval(delayInMilliseconds);
},29000);*/

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
	$('html, body').animate ({scrollTop: $(valHref).offset().top - 70 + "px"});
}); 

 calcAll.onclick = function() {
    alert('Спасибо');
  };

var type = document.getElementById('type').value
var design = document.getElementById('design').value
var adaptation = document.getElementById('adaptation').value
calcAll.onclick = function() {
/*РАСЧЁТ МАНЕЙ*/
var calc = 0;
var calcT = 0;
/*расчёт типа*/
if (type == 1){
	calc = calc + 1000;}
if (type == 2){
	calc = calc + 2000;}
if (type == 3){
	calc = calc + 3000;}
/*расчёт дезигна*/
if (design ==1) {
	calc = calc + 1000;} 
if (design ==2) {
	calc = calc + 2000;} 
if (design ==3) {
	calc = calc + 3000;} 
/*расчёт адаптации*/
if (adaptation ==1) {
	calc = calc + 1000;;} 
if (adaptation ==2) {
	calc = calc + 2000;} 
if (adaptation ==3) {
	calc = calc + 3000;}

/*РАСЧЁТ ТАЙМОВ*/
var calcT = 0;
/*расчёт типа*/
if (type == 1){
	calcT = calcT + 3;}
if (type == 2){
	calcT = calcT + 2;}
if (type == 3){
	calcT = calcT + 1}
/*расчёт дезигна*/
if (design ==1) {
	calcT = calcT + 3;} 
if (design ==2) {
	calcT = calcT + 2;} 
if (design ==3) {
	calcT = calcT + 1;} 
/*расчёт адаптации*/
if (adaptation ==1) {
	calcT = calcT + 1;} 
if (adaptation ==2) {
	calcT = calcT + 2;} 
if (adaptation ==3) {
	calcT = calcT + 3;}
document.getElementById("calcMoney").innerHTML = calc;
document.getElementById("calcTime").innerHTML = calcT;
};


/*анимка лого*/
$(document).ready (function (){
let optionsL = {thereshold: [0.5]};
let observerL = new IntersectionObserver (onEntry, optionsL);
let elementsL = $('.logo-animation');
elementsL.each ((i, el)=>{
	observerL.observe(el);
});
function onEntry (entry){
	entry.forEach (change =>{
		if (change.isIntersecting){
			change.target.classList.add('ShowLogo');
		}
	})
}
})



$(document).ready (function () {
  var logoAnim = document.querySelector('.logo-animation');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('ShowLogo');
      }
    });
  });

  observer.observe(logoAnim);
});




/*анимка статы*/
$(document).ready (function () {
  var stataAnim = document.querySelector('.stataAnim');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('stataAnim-animation');
      }
    });
  });

  observer.observe(stataAnim);
});


$("#inputPhone").mask("+7(999)999-9999");


$('form').submit(function(event){
	event.preventDefault();
	$.ajax({
		type: "POST",
		url: "php/mail.php",
		data: $(this).serialize()
	}).done(function(){
		$(this).find("input").val("");
		alert("u sex");
		$("form").trigger("reset");
	});
	return false
})