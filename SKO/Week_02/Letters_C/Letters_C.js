//Code by Jamie Tung
// Uses mouseX to turn the c into an C!
// edited by Win 

function setup() {
createCanvas (500,500);
rectMode(CENTER);  
}

function draw() {
 translate( 18, 5); 
 background(240);
 let a = map(mouseX, 0, width, 0, 25,true); 
 let b =map(mouseX, 0, width, 255, 0,true);
 
 fill(17,23,55);
 noStroke(0);
 

 rect(250,150,50,50,0,0,a,0);
 rect(200,150,50,50,a,0,0,0);
 rect(150,250,50,50,0,0,0,0);
 rect(150,200,50,50,a,0,0,0);
 rect(150,300,50,50,0,0,0,a);
 rect(200,350,50,50,0,0,0,a);
 rect(250,350,50,50,0,a,0,0);
 
 fill(17,23,55,b);
 rect(300,200,50,50,a,0,0,0);
 rect(300,300,50,50,0,0,0,a);
}
