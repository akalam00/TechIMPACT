/* Created by Professor D

Modified  by Abul Kalam two function project


*/
var litt = {
x : 200,
y : 140,
xspeed : 4,
yspeed : -1,
}

function setup() {
	createCanvas(600, 400);
	background(0, 94, 235);
}

function draw() {
	stroke(255);
 move();
 display();
 bounce();
 
	 for (var c = 0; c <= width; c += 20) { // for every i add 20. Spaces rectangles out. 
		for (var d = 0; d <= height; d += 20) { // for every j add 20. Spaces rectangles out.
			fill(mouseX, random(255), mouseY); // fill based on a random value and the mouse position
			triangle (c, d, 25, 25,68 ,68 ); // draw at c, d for each rectangle's x and y position. 
		}
	}
}

function bounce (){
 if(litt.x > width || litt.x < 0){// we limited up to the edge of the function
  litt.xspeed = litt.xspeed  * -1; // we wanted to change the direction of the speed
  background(random(255), random(255), random(255)); // random background is set on x position
  }
  
  
 }
function move(){
 litt.x = litt.x + litt.xspeed;
 litt.y = litt.y + litt.yspeed;
}

function display (){
 strokeWeight (2);
 stroke (255);
 point (litt.x, litt.y);
}

