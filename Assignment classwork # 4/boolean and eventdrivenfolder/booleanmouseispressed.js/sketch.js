/*
https://vimeo.com/channels/learningp5js/138935677
*/

function setup() { // funcion initial start to run the code
  createCanvas(600, 400); // canvas set to a value
}

function draw() { // draw function executes the initial code
  background(0);  // background is set
  stroke(255);   // stokes set a value
  strokeWeight(4); // thicker strokes 
  noFill(); // not filling
  
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) { // check to see if the statement is true when its at this position
    if (mouseIsPressed) { // check to see when the mouseis pressed the statement is true
      background(0, 255, 0); // the background set at that coordinates
    }
    fill(255, 0, 200); // fill the color of the rectangle
  }
    rect(300, 200, 100, 100); // rectangular function set to value 
}