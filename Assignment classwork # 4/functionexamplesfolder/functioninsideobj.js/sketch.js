

/* function inside object

Created by Professor d,
Modified and written from sketch by Abul Kalam 
*/


var float1 = { // variable float1 set to create a function inside object
	x1: 50, // the x1 value set to 50
	y1: 0, // the y1 set to zero
	x2: 150, // the x2 value is 150 
	y2: 90, // the y2 vaue is set to 90
	speed: 2, // speed is set to 2
	display: function() { // the display name-value (aka key-value) pair includes a function as its value. 
	 // it also set to execute the function we are trying find out
		stroke(random(255), random(255), random(255)); // stoke is set to random
		strokeWeight(2); // the thicker the stoke is
		line(this.x1, this.y1, this.x2, this.y2); //  This references a local variable inside the defined function's object in this case on the line
	}, //  this also determines the line on that x and y coordinates are 
	move: function() { // move function is determined and ready to exectue
		this.x1 = this.x1 + this.speed; // local variable are defined function on the object as the x1 and its speed
		this.y1 = this.y1 + this.speed; // local variable are defined to function on the object as the y1 and its speed
		this.y2 = this.y2 + this.speed; // local variable are defined to function on the object as the y2 and its speed
	}
}

var float2 = { // second variable float2 has determined
	x1: 400, // x1 is 400
	y1: 200, // y1 is 200
	x2: 500, // x2 is 500 
	y2: 300, // y2 is 300
	speed: 2, // speed is 2
	display: function() { // display function determines the set it is to follow
		stroke(random(255), random(255), random(255)); // stroke on random colors
		strokeWeight(2); // thicker on strokes
		line(this.x1, this.y1, this.x2, this.y2); // line that defines a function on the object
	},
	move: function() { // move function set as the first time to have two different variables
		this.x1 = this.x1 + this.speed; // local variable are defined function on the object as the x1 and its speed
		this.y1 = this.y1 + this.speed; //  local variable are defined to function on the object as the y1 and its speed
		this.y2 = this.y2 + this.speed; // // local variable are defined to function on the object as the y2 and its speed
	}
}

function setup() { // function setup is where inital code starts
	createCanvas(600, 400); // canvas is set to determine the size of the window
}

function draw() { // function draw is where the code starts to execute
	background(0); // backgound set with a color
	float1.move(); // float1 is set to function and recalling it
	float1.display(); // float1 and set to exectute based on the display function
	float2.move(); // float2 is set to determine the where the coordinates starts and speed being controlled
	float2.display(); // float2 shows how it will exectute based the display function on the screen.
}
 
 
 
 
 
 






