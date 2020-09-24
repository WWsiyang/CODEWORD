
//code originally written by Karen 
//modified by Win 
//working with longform text
var myText= "alphabetic language can be considered a digital structure because it consists of a small symbol set that can be";
var fade;
var fadeAmount = 1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background (255,255,255);
  textSize (30);
  noStroke();
  textFont("Times");
  textAlign(CENTER);
  //fill(0);
  fade = 0;

}


function draw() {
  background(255);
  //textLeading(sin(frameCount *0.01)*50);
  textLeading(35);
  fill(0,0,0,fade);
  text(myText, int(windowWidth/4), windowHeight/2, int(windowWidth/2), windowHeight);
  
  if (fade <0) fadeAmount=1;
  //if (fade >255) fadeAmount=-10;
  fade +=fadeAmount;
  print(fade);
  
}

//class Letters {constructor }
