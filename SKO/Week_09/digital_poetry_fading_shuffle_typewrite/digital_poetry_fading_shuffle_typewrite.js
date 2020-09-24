//code written by Karen 
//code written by 

//modified by Win 

// I wanted the code to show the process of morphing from one sentence to another. but this is what i got now

var generativetext= 
["alphabetic language can be considered a digital structure",
"it consists of a small symbol set that can be",
"endlessly combined and recombined",
"happy birthday Andy",
"to produce an infinite number of words and texts."

];
var fade;
var fadeAmount = 1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background (255,255,255);
  textSize (50);
  noStroke();
  textFont("Times");
  textAlign(CENTER);
  frameRate(30);
  //noLoop();
  
fill(0,0,0,fade);
  fill(0);
  fade = 0;

}


function draw() {
  
  //background(255);
 
   var myText = generativetext[round(random(generativetext.length-1))];
   text(myText, int(windowWidth/4), windowHeight/12, int(windowWidth/2), windowHeight);
   
  textLeading(sin(frameCount *0.01)*50);
  textLeading(mouseX/8);
 
  
  
  if (fade <0) fadeAmount=1;
  if (fade >255) fadeAmount=-10;
  fade +=fadeAmount;
  print(fade);
  
}

function mousePressed(){
 noLoop(); 
}

function mousePressed(){
 loop(); 
}
