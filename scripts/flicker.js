/**
 *  John Morrow 2015
 *
 */

$(document).ready(function() {
  $("#circle-1").hover( swapPhoto, function() {})

});


function swapPhoto() {
  setTimeout(function() { $("#wing").toggle() }, 100);
  setTimeout(function() { $("#wing").toggle() }, 300);
  setTimeout(function() { $("#wing").toggle() }, 500);
  setTimeout(function() { $("#wing").toggle() }, 600);
  setTimeout(function() { $("#wing").toggle() }, 700);
  setTimeout(function() { $("#wing").toggle() }, 800);
}

function swapPhoto_() {
  $("#arm").toggle();
  setTimeout(function() { $("#arm").toggle() }, 100);
  setTimeout(function() { $("#arm").toggle() }, 300);
  setTimeout(function() { $("#arm").toggle() }, 500);
  setTimeout(function() { $("#arm").toggle() }, 600);
  setTimeout(function() { $("#arm").toggle() }, 700);
}
