//follow tutorial by Traversy Media
//modified by Win 

var target = ('+,×');
//var rand,listLength;

const particles = [];

function preload() {
 myFont = loadFont('data/Apercu-Mono.otf'); 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('#0B091F');
  listLength=target.length;
  
  const particlesLength = Math.floor(windowWidth/3);//CHANGE (VAR) TO ADJUST NO OF PARTICLES
  
  for (let i=0;i<particlesLength;i++) {
    particles.push(new Particle());
    }
}

function draw() {
  background('#0B091F');
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
  this.vel = createVector(random(-0.2,0.2), random(-0.2,0.2));
  //size 
  this.size=random(50);
 }
 //update movement by adding velocity 
 update() {
 this.pos.add(this.vel);
 this.edges();
 }
 //draw single partilce 
 draw(){
   noStroke();
   //fill('rgba(237,28,36,1)');
   //text(target,this.pos.x,this.pos.y);
   //textSize(this.size*random(0.5));
   //ellipse(this.pos.x,this.pos.y,this.size*0.5); 
   fill(random(200,235),234,206);
   rect(this.pos.x,this.pos.y,this.size,this.size); //
   
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
