/*
Example with  shapes across the canvas/window using object literal notation.
Created by Professor D 
Abul Kalam written from sketch and modified
*/

var circle = { // variable circle is used with object literal notation and we would be able to access it through the dot syntax
  x: 200, // x is 200
  y :200, // y is 200
  diam:50, // diameter is 50
  r:255, // rgb colors r is 255
  g:123, // rgb colors g is 123
  b:25,  // rgb colors b is 25

}
/*
the same circle would be drawn using variables, but objects enable modularity and resuability in code.
code can also be written in fewer lines. for instance:

var circlex = 200;
var circley = 200;
var diam = 50;
var circler = 255;
var circleg = 123;
var circleb = 25;


function setup() {
  createCanvas (400,400);
}

function draw() {
  background (34,123,218);
  noStoke ();
  fill (circler, circleg, circleb);
  ellipse (circlex, circley, diam, diam);
}

// compare this to code organized with an object.
*/

function setup(){ // the inital point where the code starts
  createCanvas(400,400); // canvas is set to determine the window
}

function draw (){ // draw function is where the code is executed.
  background (34,123,218); // backgound is set to a color
  noStroke (); // no stokes needed
  fill(circle.r, circle.g, circle.b); // to fill circle with color we access to object iliteral notation
  ellipse(circle.x, circle.y, circle.diam, circle.diam); // the ellipse function is accessed as the object iliteral noation is followed
}