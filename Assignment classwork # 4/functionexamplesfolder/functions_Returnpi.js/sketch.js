/* created by Professor D,
Written by Abul Kalam and modified
http://vimeo.com/channels/learningp5js/139587730
*/
function setup() { // setup function is where the initial code starts
 // var angle = degrees(PI/2);
 // console.log(angle);
 var km = milesToKm(26.3); // variable km is set 
 console.log(km); // when we execute the variable information it will execute and give us an answer
 var km2 = milesToKm (100); // we set second variable to see how it will work
 console.log(km2); // doing the console would give us anather answer based on the code that has been executed
  
 // console.log(milesTokm(90);
}

function milesToKm(miles) { // the function determines the miles that we want to find out
  var km = miles*1.6; // so we used the variable and executed the code and found the answer
  return km; // to find out the answer we had to return the variable
}

// so the answer were 42.08 km
// and the miles were 160 