/* Created by Professor D
   Modified by Abul Kalam

*/


var diam = 150; // variable set to a value
var bgCol = 200; // variable set to a value 
var bgSwitch = 0; // variable set to a value

function setup() { // initial setup of the function
	createCanvas(500, 500); // canvas size
	background(bgCol); // how the backgound would look
	noStroke(); // no strokes
	fill(0, 0, 255); // how the color would look
	rect(width / 2, height / 2, diam, diam); // the rect function set with the width and hight 
}


function draw() { // the draw function to execute the code

	// noStroke();
	// fill(255, 0, 0);
	// ellipse(width / 2, height / 2, diam, diam);
}

function mousePressed() { // the mousePressed() function executes once when the mouse is pressed and see the code executed
	background(bgSwitch); // backgound set to a value  
	noStroke(); // no stokes
	fill(0, 0, 255); // filling the ellipse
	ellipse(width /2, height / 2, diam, diam); // ellipse function would look at the code executed.
}