/* 
Example with multiple shapes across the canvas/window using object literal notation.
Created by Professor D 
Abul Kalam written from sketch
*/ 

var circle = { // we have a variable circle set to using of mulitiple object
  x:200, // x set to 200
  y:200, // y set to 200
  diam :50, // diam is set to 50
  r:255, // r is color 255
  g:123, // g is green color 123
  b:25  // b is blue color 25
}

var rectangle = { // we have a variable rectangle set to use the code
  x:100,    // x is 100
  y:100, // y is 100
  diam:75, // diameter is 75
  r:15,    // rgb r is 15
  g:33,    // rgb g is 33
  b:225   // rgb b is 225
}


function setup() {  // where the initial code starts
  createCanvas(400,400); // canvas is set for the window
  
}

function draw() {  // draw function is where the code executes
  background (34,123, 218); // background is set to a rgb colors
  noStroke(); // we do not want any stroke on this function
  fill(circle.r, circle.g, circle.b); // fill this as the object
  ellipse (circle.x, circle.y, circle.diam, circle.diam); // funcition ellipse would be followed the object procedure
  fill (rectangle.r, rectangle.g, rectangle.b); // fill the rectangle with the object and have dot in between to determine its an object
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam); // draw the rectangle object. 
  
  
}