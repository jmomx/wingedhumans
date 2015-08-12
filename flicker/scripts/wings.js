/**
 *  John Morrow 2015
 *
 */

$(document).ready(function() {
  $("img").mousemove( swapPhoto)

});


function swapPhoto() {
  if (Math.random() < .2) {
    $("#wing").toggle();
    setTimeout(function() { $("#wing").toggle() }, 100);
  }
}
