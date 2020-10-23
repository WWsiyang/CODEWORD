var txt1;//content
var txt2;
var txt3;
var txt4;
var txt5;
var txt6;
var txt7;
var txtContent;

var scale; //textsize
var outer; //second box var  
var txtbw;//textbox width
var moving;//
var changeDirection;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  
  scale = width/30;
  
  txt1 = ['As Cayley (1998b) points out'];
   txt2 = ['alphabetic language can be considered a digital structure'];
    txt3 = ['because it consists of a small symbol set that can be endlessly combined and recombined'];
     txt4 = ['to produce an infinite number of words and texts.'];
      txt5 = ['The computer is the most conspicuous instance of networked and programmable media  '];
       txt6 = ['that rely on binary code,'];
       txt7 = ['but it is by no means the first medium to use digitized language. '];
  
  outer = scale*0.5;
  movingx = 1;
  movingy =0;
  changeDirection = false;
  
  txtw = scale+outer;
txtContent=random(txt1,txt2,txt3,txt4,txt5,txt6,txt7);
  
  
}

function draw() {
  background(200);
  //let mousePosition = "(" + mouseX + "," + mouseY + ")";
 
  //translate(moving,0);
  // translate(-moving,0);
  textRegion(movingx,movingy, txtbw,outer,txt1,scale);//startx,starty,w,h,txtcontent,size
  textRegion(movingx,movingy+txtw, txtbw,outer,txt1,scale);//startx,starty,w,h,txtcontent,size
  textRegion(movingx,movingy+txtw*2, txtbw,outer,txt2,scale);//startx,starty,w,h,txtcontent,size
  textRegion(movingx,movingy+txtw*3, txtbw,outer,txt3,scale);//startx,starty,w,h,txtcontent,size
  textRegion(movingx,movingy+txtw*4, txtbw,outer,txt4,scale);//startx,starty,w,h,txtcontent,size
  textRegion(movingx,movingy+txtw*5, txtbw,outer,txt5,scale);//startx,starty,w,h,txtcontent,size
  textRegion(movingx,movingy+txtw*6, txtbw,outer,txt6,scale);//startx,starty,w,h,txtcontent,size
  textRegion(movingx,movingy+txtw*7, txtbw,outer,txt7,scale);
  //movingx = movingx +1;
  
   if (movingx > width) {
    changeDirection = true;
   }else if(movingx < 0) {
     changeDirection = false;
   }
   
   if (movingx>=0 && changeDirection == false){
    movingx=movingx+1}
  //if x is greater than OR equal to 0, move right
  else if(changeDirection == true){
    movingx=movingx-1}
   
}

function textRegion(r1 ,r2, txtw, outer,txtContent,_size){
  txtbw = textWidth(txtContent)+scale;

  
 

  //translate(moving,r2);
  fill(0);
  textSize(_size);
  text(txtContent,r1+outer,r2+_size);
  noFill();
  strokeWeight(outer/4);
  rect(r1,r2,txtbw+outer,_size+outer/2);

  

}
