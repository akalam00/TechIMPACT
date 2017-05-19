/*  By Abul Kalam
 by Professor D with help of comments
 
 
// we know that every P5 sketch  requires at least two functions,  which are  function setup() and function draw()
// function is a keyword that P5 recognizes as a function indicator and we learned that order matters and function setup() will start as follow draw()function. They can not be interchange their position and the codes will not compile without them as  order and that is why order matters. 
// The setup() function is called once when the program start. It is used to define the screen size , background,color and to load images as the program starts. There
//could be only one setup()function for each program and it should not be called again. We also know that variables called with setup()function are not usable with anyother functions including draw()function and vice versa and order matters. Also, draw() function called after setup()function and the code continueously executes until the codes ends or new Loop starts. 
// Therefore it is important that we follow these precedure and make sure that we follow all the orders that follows in the coding and it will help us compile our code






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
 
