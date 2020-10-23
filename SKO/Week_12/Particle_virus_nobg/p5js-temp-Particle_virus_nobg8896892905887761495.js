//follow tutorial by Traversy Media
//modified by Win 

const particles = [];
var xPosition, yPosition;


function setup() {
  createCanvas(windowWidth,windowHeight);
  xPosition = windowWidth/2;
  yPosition = windowHeight/2;
  
  background('#0B091F');
  const particlesLength = Math.floor(windowWidth/2);//CHANGE (VAR) TO ADJUST NO OF PARTICLES
  
  for (let i=0;i<particlesLength;i++) {
    particles.push(new Particle());
    }
}

function draw() {
  background('rgba(235,234,206,1)');
  fill('#0B091F');
  ellipse(xPosition, yPosition, windowWidth/2);
  particles.forEach((p, index)=> {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  }); 
}

class Particle{
 constructor(){
  //position
  this.pos = createVector(random(width),random(height));
  //velocity 
  this.vel = createVector(random(-1,1), random(-1,1));
  //size 
  this.size=random(10);
 }
 //update movement by adding velocity 
 update() {
 this.pos.add(this.vel);
 this.edges();
 }
 //draw single partilce 
 draw(){
   noStroke();
   fill('rgba(235,234,206,1)');
   //rect(this.pos.x,this.pos.y,this.size,this.size); 
   ellipse(this.pos.x,this.pos.y,this.size); 
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
 
 //connect particles 
 checkParticles(particles){
   particles.forEach(particle => {
     const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
   if(d<80){//CHANGE (VAR) TO ADJUST CONNECTION 
     stroke('rgba(235,234,206,0.5)');
     line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
   }
   });
 
 }
}
