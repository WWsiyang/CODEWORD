//follow tutorial by Traversy Media
//modified by Win 

//var target = ('+');
var target = ('TNT');
//var rand,listLength;

const particles = [];

function preload() {
 myFont = loadFont('data/Apercu-Mono.otf'); 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('#04020d');
  listLength=target.length;
  //frameRate(5);
  textAlign(CENTER,CENTER);
  rectMode(CENTER,CENTER);
  
  const particlesLength = Math.floor(windowWidth/3);//CHANGE (VAR) TO ADJUST NO OF PARTICLES
  
  for (let i=0;i<particlesLength;i++) {
    particles.push(new Particle());
    }
}

function draw() {
  //background('#0B091F');
  particles.forEach((p, index)=> {
    p.update();
    p.draw();
  }); 
}

class Particle{
 constructor(){
  //position
  this.pos = createVector(random(width),random(height));
  //velocity 
  this.vel = createVector(random(-2,2), random(-2,2));
  //size w
  this.sizew=random(70);
  //size h
  this.sizeh=random(70);
 }
 //update movement by adding velocity 
 update() {
 this.pos.add(this.vel);
 this.edges();
 }
 //draw single partilce 
 draw(){
   //noStroke();
   fill('232,231,203');
   text(target,this.pos.x,this.pos.y);
   textSize(random(this.sizeh/2));
   //ellipse(this.pos.x,this.pos.y,this.size*0.5); 
   //fill(random(200,235),234,206);
   fill(255,0,0);
   rect(this.pos.x,this.pos.y,random(this.sizew),random(this.sizeh),random()); //
   
 }
 //detect edges 
 edges(){
   if(this.pos.x<0 || this.pos.x>width){
     this.vel.x *= -1;
 }
 
 if(this.pos.y<0 || this.pos.y>height){
     this.vel.y *= -1;
 
}
 }
}
