function preload() {
  GothamMedium = loadFont('data/GothamMedium.otf');
  CourierStd = loadFont('data/CourierStd.otf');
}


function setup() {
  createCanvas(600,600);
  background(220);
  fill(0);
   //textFont(font,32);
  textAlign(CENTER);

}


function draw() {
  textSize(30);
  textFont(GothamMedium);
  text ('hello world',300,200);
   textFont(CourierStd);
  textSize(20);
  text ('hello world',300,300);
  textSize(10);
  textFont(CourierStd);
  text ('hello world',300,400);//smallword
  

}
