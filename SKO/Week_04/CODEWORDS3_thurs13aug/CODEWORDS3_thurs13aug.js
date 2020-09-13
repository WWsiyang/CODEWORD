function preload() {
  GothamMedium = loadFont('data/GothamMedium.otf');
  CourierStd = loadFont('data/CourierStd.otf');
}
var spin=0;
var letterSize;

function setup() {
  createCanvas(600,600);
  background(220);
  fill(0);
  angleMode(DEGREES);
   //textFont(font,32);
  textAlign(CENTER);
  frameRate(15);

}


function draw() {
  fill(0);//text ink color
  translate(300,300);
  rotate(spin);
  textSize(letterSize);
  textFont(CourierStd);
  text ('spining + code = spiral',0,20);
  spin+=map(mouseX,0,600,-3,3);//(original,new)
  letterSize=map(mouseY,0,600,8,72);
  //spin=spin+5;//constant speed
  //spin+=spin+5;//accelerating
 //spin+= int(mouseX/50-300);//300 is midpoint
 //spin+=7;
 
  stroke(0);
  fill(240,20);//shade of grey & alpha value 
  //rect (100,100,500,500);
  
  rotate(0);
  noStroke();
  fill(240);//writing over layers 
  pop();
  background(240,30);

 
}
