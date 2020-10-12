//if want the dots to be scared of the mouse, change seek to flee
//let camera;

function Vehicle(x,y, size) {
  //createVector= 2-3 d vector 
 this.pos= createVector(random(0,width),random(height));//position// starting point 
 this.target= createVector(x,y);
 this.vel= p5.Vector.random2D();//velocity
 this.acc= createVector();//acceleration
 this.r=(random(2,10,13,15));
 //camera setup 
 this.s=int(random(width/80,height/100));
 //camera = createCamera();
 //setCamera(camera);
 
  //textSize((random(1,2)));
 var letters = ['A','C','E','F','G','H','I'];
 this.letter=letters[int(random(0, letters.length))];
 //this.lettersize=textSize(int(random(6,12)));
 
  if (size != null) {
        this.r = size;
    } else {
        this.r = 1;
    }
    
 this.maxspeed = 15;
 this.maxforce = 1;
 }

Vehicle.prototype.behaviors = function(){
  var arrive = this.arrive(this.target);
  //var mouse = createVector(mouseX, mouseY);
   
  arrive.mult(1);
  this.applyForce(arrive);
}

Vehicle.prototype.applyForce = function(f){
  this.acc.add(f);//multiple forces add into accerlation 
  
}

Vehicle.prototype.update=function(){
  //accleration changing verlocity, velocity changing position
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Vehicle.prototype.show = function(){
  
    //point(this.pos.x, this.pos.y);
  push();
  //stroke(255);
  fill(random(100,255));//RGB
  //textAlign();
 textSize(this.s);
 textFont(subfont);
 text(this.letter, (this.pos.x), (this.pos.y));
 pop();
    //noStroke();
    //textSize(int(random(6,12)));
   
 
}


Vehicle.prototype.arrive = function(target){
  var desired = p5.Vector.sub(target,this.pos);//subtract the two vectors from position to target
  var d = desired.mag();//distance 
  var speed = this.maxspeed;
  if (d<100){
   speed = map(d,0,100,0,this.maxspeed);
  } 
  
  
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer; //calculate the force and return it 
}

Vehicle.prototype.seek = function(target){
  var desired = p5.Vector.sub(target,this.pos);//subtract the two vectors from position to target
  var d = desired.mag();
   if (d < (50)) {
  desired.setMag(this.maxspeed);
  desired.mult(-1);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer; //calculate the force and return it 
   } else {
        return createVector(0, 0);
    }
}



Vehicle.prototype.clone = function () {
    var v = new Vehicle(this.pos.x, this.pos.y);

    v.pos.x = this.pos.x;
    v.pos.y = this.pos.y;

    v.vel.x = this.vel.x;
    v.vel.y = this.vel.y;

    v.acc.x = this.acc.x;
    v.acc.y = this.acc.y;

    return v;
}
