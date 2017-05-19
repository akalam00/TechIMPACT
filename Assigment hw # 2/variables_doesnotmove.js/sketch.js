/* 
Example that moves drawn ellipses across the canvas/window using variables in the draw() loop.
Created by Dawn C. Hayes March 2017. 
By Abul Kalam
*/
 
var circX; // we use variable to hold a place
circX = 200; // than we used that variable circX to assign a value to make things easier for our code to run
var circY;  // we used new variable cricY to hold the place.
circY = 200; // than we assigned it a value to hold the place.
var circStroke = 125; // this line we just used a varible holder and assigned it a value at once.
var circR = 55; // we have used our variable circR and assigned it a value.
var circG = 135; // we used our global variable to assign the variable and a value.
var circB = 225; // we used our global variable to assign the variable and a value.
var circSize = 75;// we assigned our variable to a assigned value.
canvBG = 125, 55, 255; // we assigned our variable to  three different values
 
function setup() {  // we started with our function with function setup which follows the code order.
    createCanvas(400, 400); // the canvas function tells us how big is the canvas.
}
 
 
function draw() { // after the setup function we start the draw function and it is going to execute our code. Curly bracket defines as the code running within it.
    background(canvBG); // background function tells us about the background color
    stroke(circStroke); // stroke function tells us about where it wants its varible to use strokes for it's background
    fill(circR, circG, circB);  // fill functions fills the colors for its shapes.
    stroke(circStroke);  // and in this case the stroke function does the stoke after the fill function.
    ellipse(circX, circY, circSize, circSize); // ellipse function draws the ellipse on different coordinates based on the variables. 
    ellipse(circX + 50, circY - 75, circSize, circSize); // the second ellipse function draws the ellipse based on the coordinates.
    fill(circR, circG, circB, 135); // fill into the varibles with thier value. 
     
    // circX = circX + 1; // in the draw() loop, this statement we know will increase the value of circX by 1.
                      // which will also give us an animation that will show the ellipse at cricX will move and change its postition until the code is complete. It has shown us the increase and the adding and taking different values will change the position of our code. 
 
 
}