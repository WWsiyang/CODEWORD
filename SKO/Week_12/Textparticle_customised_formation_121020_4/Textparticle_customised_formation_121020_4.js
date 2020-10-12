//Followed tutorial by Daniel Shiffman
//combine code from Yhlas

//let camera;
var vehicles = [];

//var texts = ['ENDLESSLY', 'COMBINED', 'AND', 'RECOMBINED','∞'];
var texts = ['∞','symbols', 'combined', 'and', 'recombined','to produce','words','and','texts','endlessly'];
var nextT = 0;
var maxChangeForce = 15;

//font 
var font; 
var subfont;

//fade
var fade;
var fadeAmount = 1;

//var instructions = [];
//var insText= 'alphabetic language';

function preload(){
  font = loadFont('data/RussellSquareStd.otf');
  subfont = loadFont('data/Akkurat-Mono.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //textAlign(CENTER,CENTER);
  background('#080f0b');

 //camera setup 
 
 //camera = createCamera();
 //setCamera(camera);
 
  //center();
  fade = 0;
  
  var bounds = font.textBounds(texts[nextT], 0, 0, width/7,CENTER); //txt, x, y, fontSize
  var posx = width / 2 - bounds.w / 2;
  var posy = height / 2 + bounds.h / 2;
  
  var points = font.textToPoints(texts[nextT], posx, posy,width/7, CENTER,{
    sampleFacotor: 1
  });
  
  //computes array of pts following path for specific text
  //console.log(points); //consists of alpha,x,y Command+Option+C
 
   for (var i=0; i <points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x,pt.y);
    vehicles.push(vehicle);
    //vehicles.pop(vehicle);
    //stroke(255);
    //strokeWeight(8);
    //point(pt.x, pt.y);
      }
     
}


function draw() {
  
  background('#080f0b');
  
  //camera.lookAt(width/2,height/2, 0);
  //camera.setPosition(width/2,height/2,mouseX);//x,y,z
 
 noStroke();
  fill(255,255,255,fade);
  
  textAlign(CENTER,BOTTOM);
  textSize(width/70);
  text('Cayley',width/2,height/2+width/6);
  
   //bodyuptext
  textFont(subfont);
  textAlign(CENTER,TOP);
  textSize(width/70);
  
  text(
  'alphabetic language can be considered a digital structure because it consists of a small symbol set that can be',
  width/5,height/2-width/6,width/1.5,height/2);
  
 //bodyuptextbox
   stroke(6,11,102);
   strokeWeight(width/800);
   noFill();
   rect(width/5,height/2-width/6,width/1.5,height/18);
 
 
   //click to play button
      //noStroke();
    stroke(255,0,0,fade);
    strokeWeight(width/800);
    noFill();
    rect((width/2.5),(height/2-width/9.5),(width/4),(height/19),50);
   
   noStroke();
   fill(255,0,0,fade);
   
   textStyle(BOLD);
  textSize(width/50);
  text('click to explore',(width/5),(height/2-width/10),(width/1.5),(height/2));//txt,x,y,boxw,boxh
 
 
  if (fade<100) fadeAmount=1; 
  if (fade>255) fadeAmount=-0.5; 
    fade += fadeAmount; 
  print(fade);
  
  //rotateX(mouseX/10);
  //rotateZ(mouseY/10);
  
  for (var i = 0; i < vehicles.length; i ++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}



function mouseClicked() {
    nextT++;
    if (nextT > texts.length - 1) {
        nextT = 0;
    }

    var bounds = font.textBounds(texts[nextT], 0, 0, width/7);
    var posx = width/2  - bounds.w / 2;
    var posy = height/2  + bounds.h / 2;

    var points = font.textToPoints(texts[nextT], posx, posy, width/7, {
        sampleFactor: 0.1
    });

    if (points.length < vehicles.length) {
        var toSplice = vehicles.length - points.length;
        vehicles.splice(points.length - 1, toSplice);

        for (var i = 0; i < points.length; i++) {
            vehicles[i].target.x = points[i].x;
            vehicles[i].target.y = points[i].y;

            var force = p5.Vector.random2D();
            force.mult(random(maxChangeForce));
            vehicles[i].applyForce(force);
        }
    } else if (points.length > vehicles.length) {

        for (var i = vehicles.length; i < points.length; i++) {
            var v = vehicles[i - vehicles.length].clone();

            vehicles.push(v);
        }

        for (var i = 0; i < points.length; i++) {
            vehicles[i].target.x = points[i].x;
            vehicles[i].target.y = points[i].y;

            var force = p5.Vector.random2D();
            force.mult(random(maxChangeForce));
            vehicles[i].applyForce(force);
        }

    } else {
        for (var i = 0; i < points.length; i++) {
            vehicles[i].target.x = points[i].x;
            vehicles[i].target.y = points[i].y;

            var force = p5.Vector.random2D();
            force.mult(random(maxChangeForce));
            vehicles[i].applyForce(force);
        }
    }
}



function keyPressed(){
    if (keyCode === ENTER) {
    save("particleformation.png");
  } 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
