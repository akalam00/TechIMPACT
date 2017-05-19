/*
https://vimeo.com/channels/learningp5js/138935677
*/

var on = false; // boolen function is usually set to see if the function is true or false and it can only take one value. 
 // we are trying to prove its false in this case
function setup() { // 
  createCanvas(600, 400); // set canvas value
}

function draw() {
  if (on) { // if statement to see weather its on or off
    background(0, 255, 0); // backgound set to a color
  } else { // to run the loop we used else statement based on on or off
    background(0); // different backgound if its on or off
  }
  
  stroke(255); // stokes at a value
  strokeWeight(4); // the weight is thicker
  noFill(); // we want no filling
  
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) { //  // checking the positon of mouse X and y different positon to see if the statemnet is true or false
    fill(255, 0, 200); // coordinates to fill the color
  }
  rectMode(CENTER); // rectangle to mode at center
  rect(300, 200, 100, 100); // set a coordinats and size of the rectangle
}

function mousePressed() { // mouse pressed would check the look of the function
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) { // to make this true we were given a boundary to folow to make it true
    // if (on) {
    //   on = false;
    // } else {
    //   on = true;
    // }
    on = !on; // to  check if its on or not on. 
    
  }
}