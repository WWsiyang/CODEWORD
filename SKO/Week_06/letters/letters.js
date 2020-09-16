const letters = 'abcdedghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{};:<>,.?/';
var rand,listLength;

let angle =0;
let myFont;
function preload() {
 myFont = loadFont('data/NoeDisplay-Medium.otf'); 
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background(255);
  
  textSize(25);
  noStroke();
  textFont(myFont);
  frameRate(5);
  angleMode(DEGREES);
  listLength=letters.length;
}


function draw() {

rand = int(random(0,listLength-1));
fill(65,73,159);

translate(windowWidth/2, windowHeight/2);

rotate(angle);
angle = angle -90;

textSize(random(5,300));
text(letters[rand],random(width),random(height));
}

function KeyTyped(){
if (key == 's' || key == 'S') save("P_2_3_3_01.png");
}

//fill(255);
//ellipse(mouseX,mouseY,150,150);
