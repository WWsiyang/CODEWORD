//if want the dots to be scared of the mouse, change seek to flee

//var word = ['∞'];
var word = ['A','B','C','E','F'];

function Vehicle(x,y) {
  //createVector= 2-3 d vector 
 this.pos= createVector(random(width),random(height));//position// starting point 
 this.target= createVector(x,y);
 this.vel= p5.Vector.random2D();//velocity
 this.acc= createVector();//acceleration
 this.r=(random(2,10,4,20));
 this.maxspeed = 17;
 this.maxforce = 1;
 
}

Vehicle.prototype.behaviors = function(){
  var arrive = this.arrive(this.target);
  
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
  //stroke(0);
    //strokeWeight(this.r);
    //point(this.pos.x, this.pos.y);
    //translate(width/2,height/2);
    //rotateZ(angle);
    fill(random(100,200),random(100,200),random(100,200));//RGB
    //noStroke();
    textSize(12);
    textFont(font);
    text(random(word), this.pos.x, this.pos.y);
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
  return steer; //calculate the forece and return it 
}

Vehicle.prototype.seek = function(target){
  var desired = p5.Vector.sub(target,this.pos);//subtract the two vectors from position to target
  desired.setMag(this.maxspeed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer; //calculate the forece and return it 
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
