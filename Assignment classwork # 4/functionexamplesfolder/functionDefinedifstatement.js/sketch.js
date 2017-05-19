
/*
Defining functions. Points are drawn across  the canvas. Functions to move, bounce and display are created and called.
created by professor D
written by Abul Kalam
*/
// create an object, blip using object literal notation syntax.
var blip = { // set a function 
  x:300,    // x value is set
  y:200,   // y value is set
  xspeed:4, // speed for x value
  yspeed: -3, // speed for y value
}
function setup() { // initial setup for the code
  createCanvas(600,400); // canvas is set to a size
  background(0); // backgound of the code
}

function draw() { // where the code executes
  move (); // the move function is defined
  bounce(); // bounce function is defined
  display(); // display function is defined
}
// define a function using the keyword function.
// bounce function

function bounce(){ // bounce function is set to bounce as the code executes to check if the statement is true
  
  if(blip.x > width || blip.x < 0){// we limited up to the edge of the function
  blip.xspeed = blip.xspeed  * -1; // we wanted to change the direction of the speed
  background(random(255), random(255), random(255)); // random background is set on x position
  }
  
  if (blip.y > height || blip.y < 0) { // checking the blip function is true or false
		blip.yspeed = blip.yspeed * -1; // checking the speed and its reverse speed
		background(random(255), random(255), random(255)); // random background colors based on the point's y position
	}
  
}

// move function()
function move () { // function move is to set 
  blip.x = blip.x + blip.xspeed; // blip variable to check the value and speed on x position
  blip.y = blip.y + blip.yspeed; // blip variable in y position to cheeck the speed and its position
}

// display function ()
  function display(){ // display function on the screen
    strokeWeight (2); // stokes weight thickness
    stroke(255); // stokes is set
    point (blip.x, blip.y); // point to set a initially for x and y coordinates
    
  }