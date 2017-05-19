/* 
Example with multiple shapes across the canvas/window using object literal notation placed in tabs for organization.
Code that references the circle and rectangle are in their own tabs, linked in the HTML document:
<script src="circle.js" type="text/javascript"></script>
<script src="rectangle.js" type="text/javascript"></script>
	
Created by Dawn C. Hayes March 2017. 
Written by Abul Kalam and modified
*/


function setup() { // initial place where the code starts
	createCanvas(400, 400); // canvas is set to a size
}


function draw() { // function draw is where the code starts to execute
	background(34, 123, 218); // background is set based on rgb color
	noStroke(); // no stokes 
	fill(circle.r, circle.g, circle.b); // fill the circle and use literal notation.
	ellipse(circle.x, circle.y, circle.diam, circle.diam); // ellipse function is followed and recalled by literal notation.
	fill(rectangle.r, rectangle.g, rectangle.b); // fill function is to fill the colors
	rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam); // rectangle that would exectute and draw on the screen
}