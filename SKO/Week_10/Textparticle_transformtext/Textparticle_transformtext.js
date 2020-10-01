//Followed tutorial by Daniel Shiffman
//combine code from Yhlas

var font; 
var vehicles = [];

var texts = ['Endlessly', 'Combined', 'and', 'Recombined'];
var nextT = 0;
var maxChangeForce = 10;


function preload(){
  font = loadFont('data/AvenirNextLTPro_Demi.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  
  var bounds = font.textBounds(texts[nextT], 0, 0, 192);
  var posx = width / 2 - bounds.w / 2;
   var posy = height / 2 + bounds.h / 2;
  
  var points = font.textToPoints(texts[nextT], posx, posy,192, {
    sampleFacotor: 0.1
  });
  
  //computes array of pts following path for specific text
  //console.log(points); //consists of alpha,x,y Command+Option+C
 
   for (var i=0; i <points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x,pt.y);
    vehicles.push(vehicle);
    stroke(255);
    //strokeWeight(8);
    //point(pt.x, pt.y);
      }

}



function draw() {
  background(51);
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

    var bounds = font.textBounds(texts[nextT], 0, 0, 192);
    var posx = width / 2 - bounds.w / 2;
    var posy = height / 2 + bounds.h / 2;

    var points = font.textToPoints(texts[nextT], posx, posy, 192, {
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
