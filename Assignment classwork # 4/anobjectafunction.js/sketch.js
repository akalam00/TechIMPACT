/*
created by professor D
Abul Kalam written from sketch and defined 


*/

var drop = { // variable drop is set a determine the values and defines within the function
x1 : 200, // the x value is 200 
y1 : 200, // the y value is 200
speed :2, // speed would be at 2 
display : function () { // display function is set to determine the object function 
  stroke (random (255), random (255), random (255)); // stoke is set random on rgb colors
  strokeWeight (2); // this will determine how thicker 
  rect(this.x1, this.y1, 65, 120); // this rectangle function would give the x,y coordinates and the perimeter.
},
fun : function (){ // fun function is setup to execute the code
  this.x1 = this.x1 + this.speed; // this on x would determine and define the variable on x axis and add the speed to it as well
  this.y1 = this.y1 + this.speed; // this on y would determne and define the y axis and would also how a fucntion would be determined to run.
  
}
}
function setup() { // setup function is the initial start.
	createCanvas(600, 400); // the canvas determines how big the window is
}

function draw() { // function draw is the start of the code where it starts to execute
	background(0); // background is set to a color
	drop.fun(); // we have recalled the variable within the function and run in in draw function to see how the code exectues
	drop.display(); // we have recalled the variable and run the display fucntion to determine how it might work. 
	
	 
}
 
 
 
