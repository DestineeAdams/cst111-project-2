let moon = {
  xpos: 200,
  ypos: 20,
  speed: 1
}

let Hills = {
  X: 300,
  Y: 430
}

let Star = {
  hits: 0,
  X: [],
  Y: [],
  col: 10, //random(150, 255)
  diemeter: 5
}

let snowman = {
  X: 300,
  Y: 400,
  speedX: 2
}

let bug = {
  X: 80,
  Y: 340,
  speedX: 2,
  diemeter: 123
};

let heart = {
  X: 500,
  Y: 350,
  speedX: 2
};

let Apartment = {
  xpos: 300,
  ypos: 175,
  col:  1,
  // the width
  W: 100,
  // the height
  H: 200
}

function setup() {
  createCanvas(550, 450);
  noStroke();
  smooth();
}

function draw() {
  background(0, 0, 100);

  star();
  apartment();
  themoon();
  hills();
  Snowman();
  Bug();
  Heart();
}

// draws the moon and makes the moon go back and fouth
function themoon() {
  fill(255);

  ellipse(moon.xpos, moon.ypos, 30, 30);
  fill(0, 0, 100);
  ellipse(moon.xpos + 5, moon.ypos, 25, 25);

  moon.xpos += moon.speed;

  //console.log(moon.speed);
  //console.log(moon.xpos);

  if(moon.xpos < 0 || moon.xpos > width) {
    moon.speed *= -1;
  }

}

// makes the rolling green hills
function hills() {
  fill(0, 90, 0);
  ellipse(Hills.X - 300, Hills.Y + 10, 300, 200);
  fill(0, 100, 0);
  ellipse(Hills.X, Hills.Y, 300, 200);
  fill(0, 150, 0);
  ellipse(Hills.X - 100, Hills.Y + 50, 300, 200);
  fill(0, 90, 0);
  ellipse(Hills.X + 200, Hills.Y + 50, 300, 200);

}

// if mousepressed a star is drawen
function star() {
  if(mouseIsPressed && mouseButton == LEFT){
      Star.X.push(mouseX);
      Star.Y.push(mouseY);

      print("pushed");
      print(Star.X.length);
      print(Star.Y.length);
      print(Star.diemeter);
  }

  /*for(let x = 0; x < Star.X.length; x++) {
    for(let y = 0; y < Star.Y.length; y++) {
      //fill(Star.col);
      fill(random(150, 255));
      ellipse(Star.X[x], Star.Y[y], 5, 5);
    }
  }*/


  for(let i = 0; i < Star.X.length && i < Star.Y.length; i++) {
    fill(random(150, 255));
    ellipse(Star.X[i], Star.Y[i], Star.diemeter, Star.diemeter);
  }
}

// puts the  Snowman on sceen
function Snowman() {
  for(let i = 0; i < 80; i += 20) {
    fill(2*i, 2*i, 2*i);
    ellipse(snowman.X, snowman.Y - i, 60 - i, 60 - i);
  }
  fill(255);
  ellipse(snowman.X - 5, snowman.Y - 45, 5, 5);
  ellipse(snowman.X + 5, snowman.Y - 45, 5, 5);
  fill(100, 10, 20);
  ellipse(snowman.X - 0, snowman.Y - 35, 10, 10);


}

// puts the Bug on sceen
function Bug() {
    fill(171, 48, 171);
    // torso
    ellipse(bug.X + 10, bug.Y + 10, bug.diemeter + 0,  bug.diemeter - 47);
    // head
    ellipse(bug.X + 83, bug.Y + -16, bug.diemeter + -55,  bug.diemeter - 68);
    // tail
    ellipse(bug.X + -61, bug.Y + -51, bug.diemeter + -110,  bug.diemeter - 110);
    ellipse(bug.X + -57, bug.Y + -36, bug.diemeter + -100,  bug.diemeter - 100);
    ellipse(bug.X + -48, bug.Y + -15, bug.diemeter + -90,  bug.diemeter - 90);
    // feet L
     ellipse(bug.X + -12, bug.Y + 70, bug.diemeter + -94,  bug.diemeter - 100);
     ellipse(bug.X + -22, bug.Y + 53, bug.diemeter + -108,  bug.diemeter - 96);
    //feet R
     ellipse(bug.X + 44, bug.Y + 70, bug.diemeter + -94,  bug.diemeter - 100);
     ellipse(bug.X + 37, bug.Y + 53, bug.diemeter + -108,  bug.diemeter - 96);
    // eye
    fill(17, 130, 109);
     ellipse(bug.X + 55, bug.Y + -44, bug.diemeter - 80,  bug.diemeter - 80);
     ellipse(bug.X + 111, bug.Y + -44, bug.diemeter - 80,  bug.diemeter - 80);
    // mouth
    for(var i = 0; i < 70; i += 5) {
        fill(33, 38, 196,100);
        ellipse(bug.X + 76, bug.Y + -4, bug.diemeter + -94 - i,  bug.diemeter - 100 - i);
    }
};

// puts the Heart on sceen
function Heart(){
  // body
  fill(15, 2, 200);
  ellipse(heart.X - 110, heart.Y - 0, 80, 100);
  ellipse(heart.X - 50, heart.Y - 0, 80, 100);
  triangle(heart.X - 143, heart.Y + 29, heart.X - 18, heart.Y + 29, heart.X - 82, heart.Y + 86);
  // eye whites
  fill(224, 221, 240, 255);
  ellipse(heart.X - 116, heart.Y - 21, 45, 45);
  ellipse(heart.X - 51, heart.Y - 21, 45, 45);
  // eye puials
  fill(15, 2, 89);
  ellipse(heart.X - 108, heart.Y - 28, 20, 20);
  ellipse(heart.X - 44, heart.Y - 28, 20, 20);
};

// color is tried to the x postion of the moon and the y postion of the mouseX
// w = 100 | h = 200
// xpos = 300 | ypos = 175
function apartment() {

  Apartment.col = moon.xpos - 250;
  fill(Apartment.col, 100, mouseY);
  rect(Apartment.xpos, Apartment.ypos, Apartment.W, Apartment.H);
  fill(Apartment.col);

  for(let y = 0; y < 135; y += 35) {
    fill(Apartment.col + y);
  rect(Apartment.xpos + 10, Apartment.ypos + y + 10, Apartment.W - 75, Apartment.H - 170);
  rect(Apartment.xpos + 60, Apartment.ypos + y + 10, Apartment.W - 75, Apartment.H - 170);
  }
}
