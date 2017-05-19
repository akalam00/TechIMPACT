/*

array of objects.

Code by Professor D
Written by Abul Kalam from sketch
*/

var stars = []; // variable set by a empty array
var moon;// the variable has a empty value.


function setup() { // initial function to set the window and the code
  createCanvas(600, 400); // the size of the canvas

  for (var i = 0; i < 400; i++) { //  we use for loop and how its value increase
    stars[i] = { // we have used array object to run the code
      x1: random(0, width), // we are at the X position with the random values between 0 and width
      y1: random(0, height), // we are at the Y positon with the random values between 0 and height
      display: function() {  // display function display the function on the window
        stroke(random(225)); // strokes would be random.
        point(this.x1, this.y1); // and at what point we want .
      }
    }
  }
  moon = { // moon is set for array object 
    x: 100,// with x value is equal 100
    y: 350, // y given a value
    diam: 100, // diameter given a value
    xspeed: .5,// how the speed on x direction
    yspeed: .5, // how the speed on y direction
  }

  cloud = { // cloud is set for array object
    x: 50, // given a x value
    y: 150,// given a y coordinate
    diam: 75, // given a diameter of the cloud
    col: 255 // whats the color we wanted
  }
}


function draw() { // how we want our function to look
  background(0, 14, 35); // the color of the background
  for (var i = 0; i < stars.length; i++) { // we set the value of the start and check the lenth for the code to execute
    stars[i].display(); // display function shows after this portion of the code runs
  }
  noStroke(); // we dont want any storke
  fill(225, 225, 134); // we want to fill it with the color
  ellipse(moon.x, moon.y, moon.diam, moon.diam); // used the ellipse function 

  if (moon.x > 0 || moon.x < width && moon.y > 0 || moon.x < height) { // we used the if statement to check weather the code true or false 
    moon.x = moon.x + moon.xspeed; // we added x value to its self and added speed to it
    moon.y = moon.y - moon.yspeed; // we added y value to itself and added speed to it at the coordinats
  }

// make a cloud constructor function to replace verbose code
  noStroke();// we do not want any stroke
  fill(cloud.col); // we want to see what color we wanted to fill the cloud with
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam); // used the ellipse funtion to see the x and y value with diameter
  ellipse(cloud.x + 30, cloud.y - 15, cloud.diam, cloud.diam + 35); // used the ellipse function added new value and see the positon 
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam); // used different coordinated of x and y values
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam); // used ellipse to set the new coordinates for x and y value
  ellipse(cloud.x + 30, cloud.y + 15, cloud.diam + 70, cloud.diam); // we set the different coordinates to test the if statement
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam); // we used different coordinates and added and subtracted number to see the coordinates and check the  statement its true

  noStroke();
  fill(cloud.col);
  ellipse(cloud.x, cloud.y, cloud.diam, cloud.diam);
  ellipse(cloud.x + 90, cloud.y - 15, cloud.diam, cloud.diam + 70);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam, cloud.diam);
  ellipse(cloud.x + 90, cloud.y + 15, cloud.diam + 70, cloud.diam);
  ellipse(cloud.x, cloud.y + 10, cloud.diam + 30, cloud.diam);

}