var myString = "I never wanted you to hate me.";

var splitString;

var word = 0;

var xpos = 100;
var ypos = 200;

var xOff = 0;
var yOff = 0;


function setup() {
  createCanvas(1300, 650);
  splitString = split(myString, " ");
}

function draw(){
  background(255,203,211);

  fill(203,255,247);
  textSize(30);
  //text(splitString[word], 100, 100);
  //text(splitString[word], xpos, ypos);
  text(splitString[word], xpos + xOff, ypos + yOff);

  xOff = random(-5, 5);
  yOff = random(-5, 5);
}

function mousePressed (){
  //put fun stuff here
  //these will do the same thing
  //word = word +1;
  //word +=1;
  word++;
  //if word is bigger than 6, go back to 0
  if (word >= splitString.length) {
    word = 0;
  }

  xpos = random(0, width - 70);
  ypos = random(0, height - 40);

  //console.log("My mouse' xpos is" + mouseX)
  //console.log("My mouse' ypos is" + mouseY)

}
