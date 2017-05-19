/*
Nested Loop Sketch
Typer: Roseanny De La Cruz
Driver: Abul Kalam
*/


function setup() {
  createCanvas(500,  500);
  background('#fae');
}

function draw() {
  strokeWeight(3);
  stroke(200);
  
  for  (var r  =  0;  r  <=  width;  r  +=  80) {
    for  (var  a  =  0;  a  <=  height;  a  +=  80) {
      fill(mouseX,  random(205),  mouseY);
      triangle(r,  a,  35,  35,  65,  65);
    }
  }
 }