/**
 *  John Morrow 2015
 *
 */

var links = [["","",""],
             [true, "Yagharek Longs to Fly",
              "http://scalar.usc.edu/works/gothic-wings/too-too-abstract-individual-yagharek"],
             [true, "Human Limb Development",
              "http://scalar.usc.edu/works/gothic-wings/limb-development-in-the-human-embryo"],
             [false, "Fallen Angels: Loss as Transformation",
              "http://scalar.usc.edu/works/gothic-wings/damiel-enters-the-river"],
             [false, "Diptera: Flies and the Loss of a Pair of Wings",
              "http://scalar.usc.edu/works/gothic-wings/flies-the-house-fly-housefly-2nd-edition-1958-encyclopaedia-britannica-films"],
             [false, "Popular Culture and Extraordinary Bodies",
              "http://scalar.usc.edu/works/gothic-wings/popular-culture-and-extraordinary-bodies"],
             [true, "From Sensory Bristles to the Spots on a Butterfly's Wing",
              "http://scalar.usc.edu/works/gothic-wings/from-sensory-bristles-to-the-spots-on-a-butterflys-wing"],
             [false, "Molecular Adolescence",
              "http://scalar.usc.edu/works/gothic-wings/molecular-adolescence"]]

$(document).ready(function() {
  $(".circle").hover( swapPhoto, function() {})
  $("#bg-sound")[0].volume = .1;
  for (i = 1; i < 8; i++)  {
     drawlink(links[i][0],"circle-" + i.toString(),links[i][1], links[i][2], i);
  }
  // set up the mute button
  mutebutton = $("#mute-button-container").click(function() {
    audioicon = $("#audio")
    muteicon = $("#mute")
    if (muteicon.css("display") == "none") {
      //audio isn't muted, so mute it
      $("#bg-sound")[0].volume = 0;
      audioicon.hide()
      muteicon.show()
    } else {
      //audio is muted, so play sound
      $("#bg-sound")[0].volume = .1;
      muteicon.hide()
      audioicon.show()
    }
  });

});


function swapPhoto() {
  $("#bg-sound")[0].play();
  setTimeout(function() { $("#wing").toggle() }, 100);
  setTimeout(function() { $("#wing").toggle() }, 300);
  setTimeout(function() { $("#wing").toggle() }, 500);
  setTimeout(function() { $("#wing").toggle() }, 600);
  setTimeout(function() { $("#wing").toggle() }, 700);
  setTimeout(function() { $("#wing").toggle() }, 800);
}

function drawlink(above, id, text, link, zorderoff) {
  center = $("#" + id);

  center.after("<div class='pop-up-container'> <a target='_blank' href='"
               + link + "'>" + text +  " </a>  </div>");
  linkcont = center.next();
  offset = center.offset();
  // setting all the z-indexes off by one so the items dont effect eachothers size
  linkcont.css("z-index", (1000 + zorderoff).toString());
  linkcont.css("width", (150).toString());
  if (above) {
    linkcont.offset({top: offset.top - 60, left: offset.left + 60});
  } else {
    linkcont.offset({top: offset.top + 60, left: offset.left + 60});
  }
}
