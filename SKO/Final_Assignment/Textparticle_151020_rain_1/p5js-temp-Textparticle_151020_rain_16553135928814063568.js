//Followed tutorial by Daniel Shiffman
//combine code from Yhlas

//sound 

var song; 
var soundeffect;

//particles 

var vehicles = [];
var points = [];
var bounds;
var posx;
var posy;
//var points;

var nextT = 0;
var maxChangeForce = 15;

//font 

var font; 
var subfont;

//bodytext

var texts = ['∞','symbols','combined', 'and', 'recombined','to produce','infinite','amount of','words','and','texts','endlessly'];
//var texts = ['∞','all those', 'moments', 'will be','lost','in time','like','tears','in rain'];

//rain 

var symbols =['∞','!','@', '#', '$','^','&','*','[',']','?','"',':'];
//var symbols =[frameCount];
var symbolscale;


//fade

var fade;
var fadeAmount = 1;

function preload(){
  song = loadSound ('data/clem-leek-bless-those-tired-eyes.mp3');
  soundeffect = loadSound ('data/ping.mp3');
  
  font = loadFont('data/RussellSquareStd.otf');
  subfont = loadFont('data/Akkurat-Mono.otf'); 
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  //sound setup
  song.play();
  song.loop();
  soundeffect.setVolume(0.5);
  //song.noLoop();
  
  //textAlign(CENTER,TOP);
  background(0);
 
  
  
  //soundeffect = loadSound ('data/Electric-Magic-Attack.mp3');
    //soundeffect.setVolume(0.5);
  
  
   //fade setup
   
  fade = 0;
  
  //particle setup
  
   bounds = font.textBounds(texts[nextT], 0, 0, width/7); //txt, x, y, fontSize
   posx = width / 2 - bounds.w / 2;
   posy = height / 2 + bounds.h / 2;
   points = font.textToPoints(texts[nextT], posx, posy,width/7, {
    sampleFacotor: 0.1
  });
  
  //computes array of pts following path for specific text
  //console.log(points); //consists of alpha,x,y Command+Option+C
 
   for (var i=0; i <points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x,pt.y);
     
    vehicles.push(vehicle);

      }
     
}



function draw() {
  
  background(0);

  
  //song draw 
  
  //song.volume(0.2);
    
    //fade
  if (fade<100) fadeAmount=1; 
  if (fade>255) fadeAmount=-0.5; 
    fade += fadeAmount; 
  print(fade);
  
    
   //body text 
   textFont(subfont);
  textSize(width/80);
   fill(random(fade,255));
   noStroke();
   text("As Cayley (1998b) points out, alphabetic language can be considered a digital structure because it consists of a small symbol set that can be endlessly combined and recombined to produce an infinite number of words and texts. The computer is the most conspicuous instance of networked and programmable media that rely on binary code, but it is by no means the first medium to use digitized language.",
   0, 0,width,height);
    text("As Cayley (1998b) points out, alphabetic language can be considered a digital structure because it consists of a small symbol set that can be endlessly combined and recombined to produce an infinite number of words and texts. The computer is the most conspicuous instance of networked and programmable media that rely on binary code, but it is by no means the first medium to use digitized language ",
    0,height-(height/10), width, height);
    
   textSize(width/40);
   //fill(fade);
    text("THE TIME OF DIGITAL POETRY: From Object to Event ",
   width/10, height/6,width,height);

   
  
   
   // ins text 
   
   fill(255,0,0);
   noStroke();
   textSize(width/100);
   text("[CLICK] TO EXPLORE            PRESS [ENTER] TO SAVE",width/3,height/4+10);
   
   //box
   
   noFill();
   stroke(255);
   rect(width/20,height/3.2,width/1.1,height/2.1);
  //stroke(255,0,0);
 //rain 
    
  let rainLocation=createVector(random(width),random(height));
  let numrect =random(width/5,height/10);//number 
  let rad =width/1000; //width
  let rectColor =fill(random(255));
  txtrain(rainLocation,numrect,rad,rectColor);  
  
  noStroke();
  
  for (var i = 0; i < vehicles.length; i ++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function txtrain(rainLocation,numrect,rad,rectColor){ 
  
push();
  stroke(fade);
  strokeWeight(0.1);
  //fill(fade);
  for(let i=0;  i<numrect;i++){
    //let crad = map(i,0,numrect -1, 10, rad);
    //textSize(symbolscale);
    //text(symbol,rainLocation.x,rainLocation.y,rad,random(10,100));//x,y,w,h
    rect(rainLocation.x,rainLocation.y,rad,numrect);
    pop();
    
  }

}

function mouseClicked() {
    

 
    if (soundeffect.play()){
    soundeffect.stop();
    }else {
    soundeffect.play();
    }
  

  
  nextT++;
    if (nextT > texts.length - 1) {
        nextT = 0;
    }

    bounds = font.textBounds(texts[nextT], 0, 0, width/7);
    posx = width/2  - bounds.w / 2;
    posy = height/2  + bounds.h / 2;

    points = font.textToPoints(texts[nextT], posx, posy, width/7, {
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
