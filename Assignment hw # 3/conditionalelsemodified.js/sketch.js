/* 
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if else control structures) in the draw() loop.
Created by Professor D
 by Abul Kalam  Modified and added comments as needed. 
*/

var circX = 200; // variable cricX set to a value.
var circY = 200; // variable cricY set to a value.
var circStroke = 125; // variable circStroke set to a value.
var circR = 255; // variable circR set to a value.
var circG = 0;// variable circG set to a value.
var circB = 0; // variable circB set to a value.
var circSize = 75;// variable circSize set to a value.
var recX = 150;// variable recX is set to a value.
var recY = 300;// variable recY is set to a value.
var recStroke = 35; // variable recStroke is set to a value.
var recCol = 220; // variable recCol is set to a value.
var recSize = 75; // variable recSize is set to a value.
var canvBG = 155;// variable canvBG is set  to a value.
var speed = 2; // variable speed is set to a value
var alph = 125; // variable alpha is the fourth color on the RGBA color and the overlap.



function setup() { // setup ()function is the start of the code and gives us the access to the size of the window.
	createCanvas(500, 500); // the size of the canvas is 500 by 500.
}


function draw() { // function draw() makes the code compile as the order follows. 
	background(canvBG);// the background function tells us how our background going to look and it is limit to 255.
	stroke(circStroke); // the stroke function tells us how thik our strokes are going to  be
	fill(circR, circG, circB, alph); // fill function would fill the colors of the circle based on RGBA.
	stroke(circStroke); // stroke function will tell us on the value of circstroke variable.
	ellipse(circX, circY, circSize, circSize); // ellipse function is going to tell us its x and y coordinates and its radius.
	ellipse(circX + 30, circY - 25, circSize, circSize); // this ellipse function is going to tell us its value of the coordinates and run the program as naccesary.
	fill(circR, circG, circB, 135); // fill funtion will fill the circles and follow the rgba.

	stroke(recStroke); // this stoke function is going to act as a rectangle with stroke.
	fill(recCol); // fill function is going to fill the rectangle with the color.
	rect(recX, recY, recSize, recSize);// rectangular function is going to act as its size and x and y values

	circX = circX + speed; // circX value is set to circX value and a speed which will change the speed of the circle
	recY = recY - speed;  // recY value will set the rectangle going vertically and will set the value to decreasing its speed.

	if (circX < width) { // the if statement is telling us to check the circle if the variable is less than the width and try to check if its true or false

		circSize += 0.3; // This circle size will increase by 0.3 through each loop and check if the statement is true and if not it will continue

	} else { // else statement tells us if the first statement is not true check the second statement

		if (circX > width) { // this time we are checking if circX is greater than the width
			speed = speed * -1; // this will check the speed and ask it to reverse direction of x
			circSize *= -.5; // This circle size will decrease by number multiplied by -.5 through each loop and compile and we saw the circles reappears. 

		}

	}

}