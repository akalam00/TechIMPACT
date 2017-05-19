/*
Defining functions. Points are drawn aross x axis of the canvas. Functions to move and display are created and called.
Created by Professor D,
Abul Kalam written from sketch and modified

*/

// create an object, blip using object literal notation syntax.
// this could be simplified by using a constructor function to make a template that will
// create as many blip objects as desired.

var blip = { // the blip  variable is set 
  x:0, // where x value is zero 
  y:100, // y is 100
  xspeed:4, // speed is 4
}

var blip2 = { // the blip variable is set for the second time
  x:0,     // x value is zero
  y:200, // the y position is the same as blip3 so that they intersect.
  xspeed:4, // the xspeed is 4 
}

var blip3 = { // another blip variable to set 
  x:600, // x value is larger than the previous ones
  y: 200, // y value is larger as well
  xspeed :4, // the speed kept the same
}

var blip4 = { // another blip variable to set 
  x:600,  // x value same as blip3
  y:300, // y value has been different to determine the different position
  xspeed:4, // speed is same 
  
}
function setup() { // setup function set to run for the first time 
  createCanvas (600,400); // canvas is set to 600 by 400 and tells us how big the window will be
  background(0); // how the background color would be determined
}

function draw() { // where the code starts to execute
  move(); // call the defined move() function.
  display(); // call the defined display() function.
}

// define a function using the keyword function and we are determining the function as well
// move function () would execute.
function move(){ // function move has been set
  blip.x = blip.x + blip.xspeed; // the value of blip x and its speed to determine
  blip2.x = blip2.x + blip2.xspeed; // the value of blip2 x and determines the speed on how it would execute based on calling the variable before 
  blip3.x = blip3.x - blip3.xspeed; // the value of blip3 x and determines how the speed would reverse in this position
  blip4.x = blip4.x - blip4.xspeed; // the value of blip4 x and determines how the speed would reverse its position 
  
}
// display function() is where we think the fucntion would draw the function out
function display(){ // display function executes based on the value that would be set
  strokeWeight(2); // the weight of stroke would be thicker.
  stroke(255,0,255); // stoke of the color would be determined by rgb 
  // an array and for loop could be used so print does not have to be called repeated and it would make it easier for us 
  
  point(blip.x, blip.y); // the points where the blip variables coordinates are
  point(blip2.x, blip2.y); // the point where the blip2 variables starts
  point(blip3.x, blip3.y);// the point where the blip3 variables starts for both x and y coordinates
  point(blip4.x,blip4.y); // the point where the blip4 variabls determined when doing a function 
  
}