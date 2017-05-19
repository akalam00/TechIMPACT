/*
Demonstrates definiton and use of a functon with parameters and arguments.
Created by Professor d
Written by Abul Kalam from sketch

*/




function setup() { // initial setup of the window
createCanvas (600,400); // canvas set to a value

}

function draw() { // where the code starts to execute
background(0); // background is set
moon (445,200,150); // the moon is set to a shape 

star (370,25); // coordinates for the star and where we want our stars to be
star (50,175);
star (115,35);
star (25,44);
star (100,17);
star (215,235);
star (418,293);
star (525,370);
star (175,350);
star (235,115);
star (444,325);
star (317,200);
star (535,315);
star (293,218);

}



function moon(xloc,yloc, diam){ // the postion of the moon.
  noStroke (); // no strokes
  fill (255,255,153); // fill the color
  ellipse (xloc, yloc, diam); // our parameters are within the ellipse
}
 function star (xloc, yloc) { // how the star function would react
   fill (255); // fill the colors
   ellipse (xloc, yloc, 5); // ellipse function  is set to execute
}