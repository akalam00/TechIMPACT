
/* 
 
BY Abul Kalam with no color
BY Professor D with the comments and help
 
*/
 
function setup() { //parenthesis holds arguments or parameters.
  createCanvas(500, 500); // the createCanvas() function sets canvas size
}
 
// draw() takes care of items that are repeated until the canvas or browser window is closed. Animations can be set within the draw() loop
function draw() { // curly brackets contain a series of statements aka "lines of code".
 
  background(255); // the background() function for back ground color. 
  ellipse(200, 200, 50, 50); //the ellipse function is used to draw an ellipse. Arguments are passed into the function to determine
  // location and size
  triangle (200,60,90,15,35,43); // the triangle function is to draw a triangle.
  rect (80,200,55,55); // the rectangle funtion is to draw a rectangle in the canvas
 
}