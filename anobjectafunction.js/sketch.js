/*

Abul Kalam written from sketch


*/

var circlex = 200;
var circley = 200;
var diam = 50;
var circler = 255;
var circleg = 123;
var circleb = 25;


function setup() {
  createCanvas (400,400);
  fill(255,255,153);
  ellipse(circlex, circley, diam, diam)
}

function draw() {
  background (34,123,218);
  noStroke ();
  fill (circler, circleg, circleb);
  ellipse (circlex, circley, diam, diam);
}

star (370,25); // coordinates for the star and where we want our stars to be
star (50,175);
star (115,35);
star (25,44);

 function star (c, circley) { // how the star function would react
   ellipse (circlex, circley, 5,5); // ellipse function  is set to execute
}