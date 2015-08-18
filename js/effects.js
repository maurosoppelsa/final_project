$(document).ready(function(){


setInterval(function () {

  stars_shooter();


}, 13000);

setTimeout(function () {

$('#title').addClass('css-typing');
$('#title').show();

}, 2500);

setTimeout(function () {

$('.thinkers_img').fadeIn(1000);
$('.quote_th').delay(1000).fadeIn(1000);

}, 5000);

$("#negative_section").mouseover(function(){

    $("#wrapper_box_n").addClass('wrapp_box_anim');

});

$("#positive_section").mouseover(function(){

    $("#wrapper_box_p").addClass('wrapp_box_anim');

});

$("#positive_section").mouseleave(function(){

    $("#wrapper_box_p").addClass('wrapp_box_animII');

    setTimeout(function () {
      $("#wrapper_box_p").removeClass('wrapp_box_anim');
      $("#wrapper_box_p").removeClass('wrapp_box_animII');
    }, 500);
});

$("#negative_section").mouseleave(function(){

    $("#wrapper_box_n").addClass('wrapp_box_animII');

    setTimeout(function () {
      $("#wrapper_box_n").removeClass('wrapp_box_anim');
      $("#wrapper_box_n").removeClass('wrapp_box_animII');
    }, 500);
});

$('#form_title').hide();
$('.labels_form').hide();
$('#button_form').hide();
$('#comment').hide();
$('#the_comment').hide();

window.addEventListener("scroll", function(event) {
    var top = this.scrollY,
        left =this.scrollX;

if(top>=2300){
  $('#sidebar').css('margin-left','0px');
  $('#form_box .form-control').fadeIn('slow');
  $('#form_box .form-control').css('display','block');
  $('#form_title').slideDown(1000);
  $('.labels_form').slideDown(1000);
  $('#button_form').fadeIn(1000);
  $('#comment').slideDown(1000);
  $('#the_comment').fadeIn(1000);
}

}, false);

//para seleccionar menu y que haga scroll hacia esa posicion
/*$('#four_section').scrollView();*/

});

function stars_shooter(){
  $('#star').hide();
  $('#star').fadeIn(3000);
  $('#star').addClass('shoot_star');

  setTimeout(function () {
  $('#star').removeClass('shoot_star');
  }, 1000);

setTimeout(function () {

  $('#star2').hide();
  $('#star2').fadeIn(3000);
  $('#star2').addClass('shoot_star2');

  setTimeout(function () {
  $('#star2').removeClass('shoot_star2');
  }, 1000);

}, 6000);
  }

//para seleccionar menu y que haga scroll hacia esa posicion

  $.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  }
