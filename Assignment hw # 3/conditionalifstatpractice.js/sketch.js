/* 
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if statement) in the draw() loop.
Created by Dawn C. Hayes March 2017. 
By Abul Kalam written no change with comments
*/

var circX = 200; // variable circx has been set to a value  
var circY = 200; // varible circY has been set to a value
var circStroke = 125; // varible circStoke is set to a value
var circR = 55; // varible circR set to a value
var circG = 135; // variable circG set to a value
var circB = 225; // variabe CircB set to a value 
var circSize = 75;// variable circSize set to a value
var recX = 100; // variable circX set to a value which is rectangle coordinates for X.
var recY = 300; // variable recY set to a value which is rectangular coordiantes for Y.
var recStroke = 35; // variable recStoke set to a value.
var recCol = 0;  // variable recCol is set to a value.
var recSize = 75; // variable recSize is set to a value.
var canvBG; // variable canvBG is set to value.
canvBG = 125, 55, 255; // variable canvBG is set to a value.
var speed = 2;// variable speed is set to a speed of 2.



function setup() {  // setup function is start of the code and tells us the size of the window
	createCanvas(400, 400); // this tells us canvas size is 400 by 400
}


function draw() { // draw function is where the code compile
	background(canvBG); // it tells us the background function 
	stroke(circStroke); // stroke function tells us where in the circle it will stoke
	fill(circR, circG, circB);  // fill function tells us where the circle would follow the RGB color to fill out
	stroke(circStroke);  // stoke function tells us stoke value to apply.
	ellipse(circX, circY, circSize, circSize); // ellipse function tells us the function of X and y coordinates and the radius of it
	ellipse(circX + 50, circY - 75, circSize, circSize); // ellipse function tell us adding to the variable set  +  50 and -75, the position of the ellipse is offset against the other.
	fill(circR, circG, circB, 135); // fill function tell us the value set for the variables on rgba. 
	
	circX = circX + speed; // We understand from this is  the value of circX will increment by speed value as set and will execute the function
					   
					   
    stroke(recStroke); // the stoke function takes the value for the recStrokes around the rectangle.
    fill(recCol);// fill function would fill the recCol color. 
    rect(recX, recY, recSize, recSize); // rect function would follow RGBA color with the rect.
    
    recY = recY - speed; // This recY would use a - incrementor to make the rectangle appear to move up on the canvas as we horizonatal. 
    
    if(circX > width || circX < 0) { // if statement is to make sure the condition is true or false.  in this case circX is testing width and weather it is logically true or false.
    								 //  if the statement is true, the  code in between the curly braces will exectute based on that and if not true than it will go to rest of the code
    								 
    	speed = speed *-1;			// we learned that if we take the speed and multiply itself by -1 we get reverse movement This achieves a "reverse movement" effect.
    								
    }
}