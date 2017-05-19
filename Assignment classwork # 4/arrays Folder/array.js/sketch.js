/* 
demonstrates color array. 
code by Professor D
By Abul Kalam written from sketch

*/


var playlist = ["Spoken For", "Beautiful", "Flawless", "The Generous Mr. Lovewell", "So Long Self", "Greater", "Welcome To The New", "I Can Only Imagine"];
  // this variable was set for to computer screen after code is being executed.

function setup() { // initial setup of the function of code.
	createCanvas(1200, 800); // the canvas is the parimeter of window we will work with the code
	background(255, 0, 0); // the color of background we want

	for (i = 0; i < 8; i++) { // we use for loop with the arrays and set the variable from zero. The loop executes for a statement to be true. 
		// console.log(playlist[i]); // we use log playlist function to run the code and set it will come up to the window. 
		stroke(255); // stroke sets the stoke of the writing
		fill(255);// fill colors based on the rgb value
		textSize(38); // it tells us what size we want our text.
		text(playlist[i], i * 100 + 50, i * 100 + 50); // this will print the index and it's location. 
	}
}

// we did not need to draw anything since everything is done at the string for arrays. 
function draw() {

}

