/*
Typer: is Abul Kalam
Driver: is RoseAnny


we are using while loop to see how two ellipses and how they work. 

*/

function setup() { // the setup function is the first thing we do and fig
createCanvas ( 300,300)  
}

function draw() {
  background (100, 40, 35);
  
  var i = 0;
  while (i <= height) { // while loope
  stroke(100);
  fill (mouseX,random (255), mouseY);
  ellipse (0 ,i ,33 ,33);
  i = i+ 30;
  }
  for (i = 1; i<= height; i += 40){
stroke(255);
fill (mouseX, random (255), mouseY);
ellipse (100 ,i, 33, 33);

}
 }