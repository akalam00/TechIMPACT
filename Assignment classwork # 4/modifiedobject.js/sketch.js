/* 
Example that moves drawn rectangle across the canvas/window using variables in the draw() loop.
Created by Professor D
 may 15th
By Abul Kalam modified the object project
*/

var rec = {
x :150,
y : 200,
diam :50,
r :255,
g :123,
b :25 ,
strok : 2,
speed : 1 
  
}

var canvBG = 0;

 /*
  // we use variable to hold a place
  // than we used that variable circX to assign a value to make things easier for our code to run
  // we used new variable cricY to hold the place.
  // than we assigned it a value to hold the place.
  */
function setup() {  // we started with our function with function setup which follows the code order.
	createCanvas(400, 400); // the canvas function tells us how big is the canvas.
}


function draw() { // after the setup function we start the draw function and it is going to execute our code. Curly bracket defines as the code running within it.
	background(canvBG); // background function tells us about the background color
	stroke(rec.strok); // stroke function tells us about where it wants its varible to use strokes for it's background
	fill(rec.r, rec.g, rec.b);  // fill functions fills the colors for its shapes.
	stroke(rec.strok);  // and in this case the stroke function does the stoke after the fill function.
	rect(rec.x, rec.y, rec.diam, rec.diam); // rectangle function draws the rectangle on different coordinates based on the variables. 
	rect (rec.x + 20, rec.y - 65, rec.diam, rec.diam); // the second rectangle function draws the rectangle based on the coordinates.
	fill(rec.r, rec.g, rec.b, 135); // fill into the varibles with thier value. 
	
	 rec.y = rec.y + rec.speed; // in the draw() loop, this statement we know will increase the value of circY by 1.
	 if (rec.y > width || rec.y < 0){ // This recY would use the - increament to move it up and down
	 rec.speed = rec.speed * -1; // at this speed of 1.
	 // which will also give us an animation that will show the ellipse at recX will move and change its postition until the code is complete. It has shown us the increase and the adding and taking different values will change the position of our code. 
}

}

// The difference between this project is not much but I have function and to be able to use objects I have followed to have a loop and functons in this code and other project is not neccesary and depends on what it asks as well.
// To access the object's properties I have used the function draw and function setup and I have set if statement to update that. 