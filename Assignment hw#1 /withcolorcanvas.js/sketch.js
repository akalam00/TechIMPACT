/* 
 
BY Abul Kalam with color
BY Professor D with the comments and help
 
*/
 
function setup() { //parenthesis holds arguments or parameters.
  createCanvas(500, 500); // the createCanvas() function sets canvas size 500 by 500
}
 
// draw() takes care of items that are repeated until the canvas or browser window is closed. Animations can be set within the draw() loop
function draw() { // curly brackets contain a series of statements aka "lines of code".
  background('rgb(0,255,0)'); // the background() function for back ground color and integer RGB notation
  strokeWeight(1);// sets the strokes of the weight used for border around. 
  var c = color (255,204,0);//define color 'c'
  fill(c);// use color variable 'c' as fill color
  ellipse(200, 200, 50, 50); //the ellipse function is used to draw an ellipse. 
  var d = color(0,0,235); // define color 'd'
  fill(d); // use color variable 'd' as fill color
  ellipse(250,175,20,20); // the ellipse function is used to draw an ellipse within the canvas size.
  triangle (400,60,190,35,35,193); // the triangle function is to draw a triangle.
 var e = color (0, 126,255,102);  // define color 'e'
  fill(e); // fill with collor 'e'
  rect (15,15,35,70); // the rectangular function is used to draw a ractangle.
 value = alpha (e); // the alpha value from a color or pixel array 
 fill (value); // fill the value with 102
 rect (50,15,35,70); // the rectangular function is used to draw a ractangle with alpha to see the difference with into two rectangle. 
 
}