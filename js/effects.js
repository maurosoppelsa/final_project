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

/*setInterval(function () {

nearly_sun();

world_shadow();

count = true;

}, 17000);*/

});

/*function world_shadow(){

$('#world').removeClass('planet');
$('#world').addClass('planet2');

setTimeout(function () {

$('#world').removeClass('planet2');
$('#world').addClass('planet');


}, 2000);

}

function nearly_sun(){


   setTimeout(function () {

      $('#moon').addClass('moon_brightness1');

    }, 500);

    setTimeout(function () {

       $('#moon').removeClass('moon_brightness1');
       $('#moon').addClass('moon_brightness2');

     }, 800);

     setTimeout(function () {

        $('#moon').removeClass('moon_brightness2');
        $('#moon').addClass('moon_brightness3');

      }, 1100);

      setTimeout(function () {

         $('#moon').removeClass('moon_brightness3');
         $('#moon').addClass('moon_brightness4');

       }, 1400);

       setTimeout(function () {

       $('#moon').removeClass('moon_brightness4');
       $('#moon').addClass('moon_brightness3');
     }, 3400);

       setTimeout(function () {

         $('#moon').removeClass('moon_brightness3');
         $('#moon').addClass('moon_brightness2');
       }, 3700);

       setTimeout(function () {

         $('#moon').removeClass('moon_brightness2');
         $('#moon').addClass('moon_brightness1');

       }, 4000);

       setTimeout(function () {

         $('#moon').removeClass('moon_brightness1');

       }, 4300);

}*/
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
