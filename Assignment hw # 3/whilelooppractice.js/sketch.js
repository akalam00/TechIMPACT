/*
Uses while() and for loop() to draw rectangles to the canvas on the y axis.
Created by Dawn C. Hayes March 2017. 
BY Abul Kalam written with comments

*/


function setup() { // function setup is the start of the code and sets the windows
	createCanvas(600, 400); // function createCanvas tells us the canvas 600 by 400
}

function draw() { // function draw exectute the code
	background(14, 56, 105); // function background tells us how our background is going to look like

	var y = 0; // variable y has been set to a value.
	while (y <= height) { // while loop is to check if the condition is true based on the heights been there and if it doesn't it will go to next code and if it doesnt meet the condition it will keep going until the code crush.
		stroke(0);// the stroke function tells you about the stokes in the rectangle
		fill(255);// fill function tells you what color to put
		rect(200, y, 50, 50); // rectangle function tells you the coordinates for its function and what would y value would be if the loop going until it meets the condition 
		y = y + 50; // we are finding the y value vertically until the code defines based on the canvas
	}

	for (y = 0; y <= height; y += 50) { // for loop is similar to while loop and we would go through with it until it compalies
		stroke(255); // how the stokes would look like
		fill(0);// how we would want our rectangles to fill with color
		rect(300, y, 50, 50);// rectanglular position of the coordinates.
	}
}