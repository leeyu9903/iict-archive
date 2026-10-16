let lipColor;

let gem1X, gem1Y, gem1Size;
let gem2X, gem2Y, gem2Size;
let gem3X, gem3Y, gem3Size;
let gem4X, gem4Y, gem4Size;
let gem5X, gem5Y, gem5Size;
let gem6X, gem6Y, gem6Size;
let gem7X, gem7Y, gem7Size;


function setup() {
  createCanvas(400, 400);
  lipColor = color(random(255), random(255), random(255))
  makeGems();


}

function draw() {
  background(255);

  push();
  noStroke();
  fill(lipColor);
  circle(20, 20, 20);
  circle(60, 20, 20);
  circle(100, 20, 20);
  circle(140, 20, 20);
  circle(180, 20, 20);
  circle(220, 20, 20);
  circle(260, 20, 20);
  circle(300, 20, 20);
  circle(340, 20, 20);
  circle(380, 20, 20);
  
  circle(0, 50, 20);
  circle(40, 50, 20);
  circle(80, 50, 20);
  circle(120, 50 , 20);
  circle(160, 50, 20);
  circle(200, 50, 20);
  circle(240, 50 , 20);
  circle(280, 50, 20);
  circle(320, 50, 20);
  circle(360, 50, 20);
  circle(400, 50, 20);

  circle(20, 80, 20);
  circle(60, 80, 20);
  circle(100, 80, 20);
  circle(140, 80, 20);
  circle(180, 80, 20);
  circle(220, 80, 20);
  circle(260, 80, 20);
  circle(300, 80, 20);
  circle(340, 80, 20);
  circle(380, 80, 20);

  circle(0, 110, 20);
  circle(40, 110, 20);
  circle(80, 110, 20);
  circle(120, 110 , 20);
  circle(160, 110, 20);
  circle(240, 110 , 20);
  circle(280, 110, 20);
  circle(320, 110, 20);
  circle(360, 110, 20);
  circle(400, 110, 20);
  
  
  circle(20, 140, 20);
  circle(380, 140, 20);

  circle(0, 170, 20);
  circle(400, 170, 20);

  circle(20, 200, 20);
  circle(380, 200, 20);

  circle(0, 230, 20);
  circle(400, 230, 20);

  circle(20, 260, 20);
  circle(380, 260, 20);

  circle(0, 290, 20);
  circle(40, 290, 20);
  circle(360, 290, 20);
  circle(400, 290, 20);

  circle(20, 320, 20);
  circle(60, 320, 20);
  circle(100, 320, 20);
  circle(300, 320, 20);
  circle(340, 320, 20);
  circle(380, 320, 20);

  circle(0, 350, 20);
  circle(40, 350, 20);
  circle(80, 350, 20);
  circle(120, 350, 20);
  circle(160, 350, 20);
  circle(240, 350 , 20);
  circle(280, 350, 20);
  circle(320, 350, 20);
  circle(360, 350, 20);
  circle(400, 350, 20);

  circle(20, 380, 20);
  circle(60, 380, 20);
  circle(100, 380, 20);
  circle(140, 380, 20);
  circle(180, 380, 20);
  circle(220, 380, 20);
  circle(260, 380, 20);
  circle(300, 380, 20);
  circle(340, 380, 20);
  circle(380, 380, 20);

  triangle(0,0,0,400,400,400);
  pop();


  push();
  fill(0);
  rect(50,150,300,100);
  pop();

  push();
  fill(255);
  strokeWeight(3);
  quad(30, 230, 100, 230, 100, 280, 60, 280);
  quad(100, 230, 140, 230, 140, 280, 100, 280);
  quad(140, 230, 180, 230, 180, 280, 140, 280);
  quad(180, 230, 220, 230, 220, 280, 180, 280);
  quad(220, 230, 260, 230, 260, 280, 220, 280);
  quad(260, 230, 300, 230, 300, 280, 260, 280);
  quad(300, 230, 340, 230, 340, 280, 300, 280);
  
  quad(20, 166, 70, 150, 70, 210, 27, 210);
  quad(70, 150, 110, 150, 110, 210, 70, 210);
  quad(110, 150, 150, 150, 150, 210, 110, 210);
  quad(150, 150, 200, 150, 200, 210, 150, 210);
  quad(200, 150, 250, 150, 250, 210, 200, 210);
  quad(250, 150, 290, 150, 290, 210, 250, 210);
  quad(290, 150, 330, 150, 330, 210, 290, 210);
  quad(330, 150, 382, 166, 370, 210, 330, 210);
  pop();

  push();
  fill(80, 210, 255);
  stroke(255);
  strokeWeight(2);
  
  quad(gem1X, gem1Y - gem1Size, gem1X + gem1Size, gem1Y, gem1X, gem1Y + gem1Size, gem1X - gem1Size, gem1Y);
  quad(gem2X, gem2Y - gem2Size, gem2X + gem2Size, gem2Y, gem2X, gem2Y + gem2Size, gem2X - gem2Size, gem2Y);
  quad(gem3X, gem3Y - gem3Size, gem3X + gem3Size, gem3Y, gem3X, gem3Y + gem3Size, gem3X - gem3Size, gem3Y);
  quad(gem4X, gem4Y - gem4Size, gem4X + gem4Size, gem4Y, gem4X, gem4Y + gem4Size, gem4X - gem4Size, gem4Y);
  quad(gem5X, gem5Y - gem5Size, gem5X + gem5Size, gem5Y, gem5X, gem5Y + gem5Size, gem5X - gem5Size, gem5Y);

  quad(gem6X, gem6Y - gem6Size, gem6X + gem6Size, gem6Y, gem6X, gem6Y + gem6Size, gem6X - gem6Size, gem6Y);
  quad(gem7X, gem7Y - gem7Size, gem7X + gem7Size, gem7Y, gem7X, gem7Y + gem7Size, gem7X - gem7Size, gem7Y);
  pop();

  push();
  strokeWeight(8);
  fill(lipColor)
  beginShape();
  vertex(20, 166);
  bezierVertex(22, 255, 68, 335, 202, 352);
  bezierVertex(330, 364, 383, 285, 382, 168);
  bezierVertex(340, 244, 275, 273, 205, 275);
  bezierVertex(125, 273, 60, 244, 20, 166);
  endShape(CLOSE);

  beginShape();
  vertex(20, 166);
  bezierVertex(48, 127, 95, 102, 150, 103);
  bezierVertex(175, 104, 187, 118, 202, 130);
  bezierVertex(218, 118, 230, 104, 255, 103);
  bezierVertex(310, 101, 360, 127, 382, 168);
  bezierVertex(325, 143, 270, 150, 205, 160);
  bezierVertex(140, 150, 82, 153, 20, 166);
  endShape(CLOSE)
  pop();

  push();
  beginShape();
  noStroke();
  fill(255, 180);
  vertex(88, 120);
  bezierVertex(105, 112, 128, 108, 150, 112);
  bezierVertex(163, 116, 173, 123, 168, 126);
  bezierVertex(155, 127, 145, 123, 130, 119);
  bezierVertex(111, 119, 99, 125, 91, 125);
  bezierVertex(85, 123, 84, 121, 88, 120);
  endShape(CLOSE);

  ellipse(178, 128, 8, 5);

  beginShape();
  vertex(110, 282);
  bezierVertex(145, 295, 205, 300, 236, 300);
  bezierVertex(210, 310, 145, 302, 110, 282);
  endShape(CLOSE);
  pop();
  

}

function makeGems() {

  gem1X = random(30, 60);
  gem1Y = random(170, 200);
  gem1Size = random(0, 10);

  gem2X = random(120, 140);
  gem2Y = random(170, 200);
  gem2Size = random(0, 10)

  gem3X = random(160, 190);
  gem3Y = random(175, 200);
  gem3Size = random(0, 10)

  gem4X = random(260, 280);
  gem4Y = random(175, 200);
  gem4Size = random(0, 10)

  gem5X = random(340, 360);
  gem5Y = random(175, 200);
  gem5Size = random(0, 10)

  gem6X = random(150, 170);
  gem6Y = random(240, 270);
  gem6Size = random(4, 7)

  gem7X = random(270, 290);
  gem7Y = random(240, 270);
  gem7Size = random(4, 7)


}

function mousePressed() {
  lipColor = color(random(255), random(255), random(255))
  makeGems()
  

}