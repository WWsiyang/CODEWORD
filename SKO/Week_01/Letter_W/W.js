function setup() {
  createCanvas (500,500);
  background (255,0,0);
    //stroke(0); //the colour of the stroke
  //strokeWeight(5); //the line thickness
  //line (100,100,400,400);
}


function draw() {
  
  background(255);
  stroke(0);
  
  fill(mouseX/2,mouseY/2,mouseX);
  
  rect (50,50,50,50);//topleft
  rect (400,50,50,50);//topright
  rect (150,350,50,50);//bottomleft
  rect (300,350,50,50);//bottomright
  
  line (60,50,150,350);//left
  line (425,50,325,400);//right
  
  circle(mouseX,mouseY,50);
  
  noFill();
  
  line (200,350,mouseX,mouseY);
  line (300,350,mouseX,mouseY);
  
  //triangle (200,350,300,350,250,mouseY);//x1,y1,x2,y2,x3,y3
  
  //strokeWeight(1);
  //fill(255,0,0,5); // rectangle with alpha transparency 
  //rect (0,0,500,500); //rect(x1, y1, width, height)
  //ellipse (250,250,300,400); //(centre x, centre y, width, height)
  //fill(0);
   // ellipse (250,250,200,300);
   //fill(255);
   //triangle(100,100,0,200,200,200); //(x1, y1,x2,y2,x3,y3)
  
}
function keyPressed () {
  fill(250);
  //rect(0,0,500,500);
}
