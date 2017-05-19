/*
Typer: is Abul Kalam
Driver: is RoseAnny


we are using while loop to see how two ellipses and how they work. 

*/

function setup() { // the setup function is the first thing we do and fig
createCanvas ( 400,400); // we set the canvas of 400 by 400 for this project 
}

function draw() { // the function draw run the code and execute.
  background (100, 40, 35);// the backgound decides what color we want in this case we set the color to be maron color
  
  var i = 0; // we have set a variable and set the variable a value to work with the while loop.
  while (i <= height) { // while loope is set to determine the specific condtion is true
              // in this case we tried to see if i variable is less than the height and how our code might react to it
              // we also wanted to see if this condition is true and wanted to run the code.
  stroke(100);// the stroke function tells us how thicker the ellipses side is going to be.
  fill (mouseX,random (255), mouseY); // this fill function is to fill the ellipse and mouseX when we go to X axis with our mouse the color would change
  // setting a random color of 255 would have let the colors access to all the random color when ellipse is fill with colors
  ellipse (0 ,i ,33 ,33);// we set our ellipse to a coordinates and within the canvas it has been set
  i = i+ 30;//  the i variable would check the number and add its position since + 30 has been added to its value and compile. 
  } // this carly braket finish it the while loop and executes the loop
  for (i = 1; i<= height; i += 40){ // the function of for loops is that it loops through a code number of times and given a set value and a added value as many times the code execute.
            // this would check to see if the loop is to be true and checks all posible ways.
stroke(255); // stroke function is set to stoke the second ellipse function with the highest stokes 
fill (mouseX, random (255), mouseY); // this fill function to see how the mouse might react to the ellipse if we use the mouse on X and y axis. 
ellipse (100 ,i, 33, 33); // ellipse is set to a coordinates and to execute its code.

}
 }
 
 // my understand of this code would be it would basically use the ellipses execute with the random, mouseX and mouseY using the while loops and the for loop
 // it was to also see how the while loop execute when to set a code to run
 // it also gave us the for loop to execute when to follow the same procedure as the while loop
 // I wanted to see how the while/for loop execute througly and want to learn more about the loops
 // my suggestion would be to improve the quality of the code to make it better and understand of the code my easier. 
 // want to improve the code by adding speed to X varicies and how it might react as it is on Y axis. 