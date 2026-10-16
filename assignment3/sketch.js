let pitches = ["Fastball", "Curveball", "Changeup", "Slider", "Forkball"];
let pitchType = "";
let pitcherMouse = false;

let thrown = false;
let ballX = 300;
let ballY = 190;
let ballSize = 6;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(140,190,250);

  noStroke();
  fill(255);
  ellipse(50, 40, 50, 20);
  ellipse(40, 30, 50, 20);
  ellipse(65, 30, 50, 20);
  ellipse(55, 25, 40, 20);

  ellipse(140, 50, 20, 10);
  ellipse(150, 45, 20, 10);
  ellipse(144, 55, 20, 10);
  ellipse(156, 55, 20, 10);
  ellipse(160, 50, 20, 10);

  ellipse(440, 33, 40, 20);
  ellipse(465, 40, 40, 20);
  ellipse(424, 55, 40, 20);
  ellipse(456, 55, 40, 20);
  ellipse(420, 40, 40, 20);
  ellipse(440, 50, 40, 20);

  ellipse(540, 45, 20, 10);
  ellipse(550, 40, 20, 10);
  ellipse(530, 43, 20, 10);
  ellipse(538, 37, 20, 10);

  noStroke();
  fill(78,120,80);
  rect(0, 70, 600, 100);

  fill(0);
  rect(200, 10, 200, 100);
  fill(60, 60, 60);
  rect(210, 20, 180, 80);

  textStyle(BOLD);
  fill(255);
  textSize(12);
  text("LOTTE", 255, 40);
  text("GIANTS", 255, 51);
  text("KT", 345, 40);
  text("WIZ", 345, 51);
  
  textSize(25);
  text(":", 300, 73);
  text("9", 255, 73);
  text("1", 345, 73);

  fill(76,78,57);
  rect(0, 120, 600, 100);

  fill(212,141,50);
  rect(0,140, 600, 300);

  push();
  translate(300, 480);
  scale(1, 0.5);

  fill(148,153,59);
  arc(0, 0, 1300, 1300, PI+QUARTER_PI, TWO_PI-QUARTER_PI);

  fill(212,141,50);
  arc(0, 0, 600, 600, PI+QUARTER_PI, TWO_PI-QUARTER_PI);

  fill(212,141,50);
  ellipse(0,-500, 150, 100);
  rect(-20, -480, 40, 300);

  stroke(255);
  strokeWeight(6);
  line(0, 0, -395, -395);
  line(0, 0, +395, -395);
  pop();

  fill(249,239,212);
  quad(300, 153, 270, 165, 300, 180, 330, 165);
  quad(0, 248, -30, 265, 0, 280, 30, 265);
  quad(600, 248, 570, 265, 600, 280, 630, 265);

  noStroke();
  fill(247,246,242);
  rect(290, 210, 7, 22);
  rect(303, 210, 7, 22);
  
  fill(245, 205, 170);
  rect(295, 178, 10, 10);
  
  ellipse(300, 170, 20, 20);
  
  fill(66,72,95);
  rect(288, 181, 25, 30, 5);

  push();
  textStyle(BOLD);
  fill(184,24,40);
  textSize(6);
  text("GIANTS", 300, 190);
  pop();
  
  arc(300, 170, 20, 20, PI, TWO_PI);
  
  ellipse(293, 230, 10, 7);
  ellipse(307, 230, 10, 7);
  
  rect(282, 185, 6, 20, 3);
  rect(313, 185, 6, 20, 3);

  fill(245, 205, 170);
  ellipse(285, 205, 7, 7);
  ellipse(317, 205, 7, 7);

  fill(247,246,242);
  rect(40, 210, 7, 22);
  rect(53, 210, 7, 22);
  fill(245, 205, 170);
  rect(45, 178, 10, 10);
  ellipse(50, 170, 20, 20);
  fill(66,72,95);
  rect(38, 181, 25, 30, 5);
  push();
  textStyle(BOLD);
  fill(184,24,40);
  textSize(6);
  text("GIANTS", 50, 190);
  pop();
  arc(50, 170, 20, 20, PI, TWO_PI);
  ellipse(43, 230, 10, 7);
  ellipse(57, 230, 10, 7);
  rect(32, 185, 6, 20, 3);
  rect(63, 185, 6, 20, 3);
  fill(245, 205, 170);
  ellipse(35, 205, 7, 7);
  ellipse(67, 205, 7, 7);
  
  fill(247,246,242);
  rect(540, 210, 7, 22);
  rect(553, 210, 7, 22);
  fill(245, 205, 170);
  rect(545, 178, 10, 10);
  ellipse(550, 170, 20, 20);
  fill(66,72,95);
  rect(538, 181, 25, 30, 5);
  push();
  textStyle(BOLD);
  fill(184,24,40);
  textSize(6);
  text("GIANTS", 550, 190);
  pop();
  arc(550, 170, 20, 20, PI, TWO_PI);
  ellipse(543, 230, 10, 7);
  ellipse(557, 230, 10, 7);
  rect(532, 185, 6, 20, 3);
  rect(563, 185, 6, 20, 3);
  fill(245, 205, 170);
  ellipse(535, 205, 7, 7);
  ellipse(567, 205, 7, 7);

  fill(247,246,242);
  rect(400, 157, 6, 20);
  rect(413, 157, 6, 20);
  fill(245, 205, 170);
  rect(405, 128, 8, 8);
  ellipse(409, 120, 18, 18);
  fill(66,72,95);
  rect(398, 131, 23, 28, 5);
  push();
  textStyle(BOLD);
  fill(184,24,40);
  textSize(6);
  text("GIANTS", 410, 140);
  pop();
  arc(409, 120, 20, 20, PI, TWO_PI);
  ellipse(403, 180, 10, 7);
  ellipse(417, 180, 10, 7);
  rect(392, 135, 6, 20, 3);
  rect(421, 135, 6, 20, 3);
  fill(245, 205, 170);
  ellipse(395, 155, 7, 7);
  ellipse(425, 155, 7, 7);
  
  fill(247,246,242);
  rect(180, 157, 6, 20);
  rect(193, 157, 6, 20);
  fill(245, 205, 170);
  rect(185, 128, 8, 8);
  ellipse(189, 120, 18, 18);
  fill(66,72,95);
  rect(178, 131, 23, 28, 5);
  push();
  textStyle(BOLD);
  fill(184,24,40);
  textSize(6);
  text("GIANTS", 190, 140);
  pop();
  arc(189, 120, 20, 20, PI, TWO_PI);
  ellipse(183, 180, 10, 7);
  ellipse(197, 180, 10, 7);
  rect(172, 135, 6, 20, 3);
  rect(201, 135, 6, 20, 3);
  fill(245, 205, 170);
  ellipse(175, 155, 7, 7);
  ellipse(205, 155, 7, 7);

  fill(247,246,242);
  rect(294, 130, 4, 15);
  rect(301, 130, 4, 15);
  fill(245, 205, 170);
  rect(296, 104, 8, 8);
  ellipse(300, 104, 15, 15);
  fill(66,72,95);
  rect(292, 112, 15, 20, 5);
  push();
  textStyle(BOLD);
  fill(184,24,40);
  textSize(4);
  text("GIANTS", 300, 120);
  pop();
  arc(300, 104, 15, 15, PI, TWO_PI);
  ellipse(295, 145, 7, 3);
  ellipse(304, 145, 7, 3);
  rect(288, 115, 4, 15, 3);
  rect(307, 115, 4, 15, 3);
  fill(245, 205, 170);
  ellipse(290, 130, 5, 5);
  ellipse(310, 130, 5, 5); 
  
  fill(247,246,242);
  rect(583, 130, 4, 15);
  rect(590, 130, 4, 15);
  fill(245, 205, 170);
  rect(585, 104, 8, 8);
  ellipse(589, 104, 15, 15);
  fill(66,72,95);
  rect(581, 112, 15, 20, 5);
  push();
  textStyle(BOLD);
  fill(184,24,40);
  textSize(4);
  text("GIANTS", 589, 120);
  pop();
  arc(589, 104, 15, 15, PI, TWO_PI);
  ellipse(584, 145, 7, 3);
  ellipse(593, 145, 7, 3);
  rect(577, 115, 4, 15, 3);
  rect(596, 115, 4, 15, 3);
  fill(245, 205, 170);
  ellipse(579, 130, 5, 5);
  ellipse(599, 130, 5, 5);
  
  fill(247, 246, 242);
  rect(5, 130, 4, 15);
  rect(12, 130, 4, 15);
  fill(245, 205, 170);
  rect(7, 104, 8, 8);
  ellipse(11, 104, 15, 15);
  fill(66,72,95);
  rect(3, 112, 15, 20, 5);
  push();
  textStyle(BOLD);
  fill(184,24,40);
  textSize(4);
  text("GIANTS", 11, 120);
  pop();
  arc(11, 104, 15, 15, PI, TWO_PI);
  ellipse(6, 145, 7, 3);
  ellipse(15, 145, 7, 3);
  rect(-1, 115, 4, 15, 3);
  rect(18, 115, 4, 15, 3);
  fill(245, 205, 170);
  ellipse(1, 130, 5, 5);
  ellipse(21, 130, 5, 5);

  let mouseIn = (mouseX > 265)
  && (mouseX < 335)
  && (mouseY > 152)
  && (mouseY < 242);

  let showCloud = mouseIn && !thrown;

  if(showCloud && !pitcherMouse){
    pitchType = random(pitches);
  }

  if(!showCloud && !thrown){
    pitchType = "";
  }

  pitcherMouse = showCloud;

  if(showCloud){
    stroke(255);
    strokeWeight(3);
    noFill();
    rect(265, 152, 70, 90);

    noStroke();
    fill(255);
    ellipse(240, 150, 50, 35);
    ellipse(220, 146, 55, 45);
    ellipse(200, 152, 50, 35);
    ellipse(205, 170, 40, 20);
    ellipse(235, 170, 40, 20);

    ellipse(270, 165, 10, 10);
    ellipse(280, 170, 6, 6);

    fill(0);
    textSize(10);
    text(pitchType, 220, 153); 
  }
 
  if(thrown){
    if (ballY < 370){
      if(pitchType === "Fastball"){
        ballY = ballY + 6;
      }else if(pitchType === "Changeup"){
        ballY = ballY + 2;
      }else if(pitchType === "Curveball"){
        ballY = ballY + map(ballY, 190, 370, 1.5, 4);
      }else if(pitchType === "Slider"){
        ballY = ballY + 4;
        ballX = ballX + 1;
      }else if(pitchType === "Forkball"){
        if(ballY<300){
          ballY = ballY + 3;
        }else{
          ballY = ballY + 8;
        }  
      }
    }
    ballSize = map(ballY, 190, 370, 6, 46);

    stroke(180);
    strokeWeight(1);
    fill(255);
    ellipse(ballX, ballY, ballSize, ballSize);

    noFill();
    stroke(176,22,42);
    strokeWeight(max(1, ballSize * 0.06));
    arc(ballX - ballSize * 0.55, ballY, ballSize * 0.6, ballSize * 0.6, -1.1, 1.1);
      arc(ballX + ballSize * 0.55, ballY, ballSize * 0.6, ballSize * 0.6, PI - 1.1, PI + 1.1);

  }  
    if(showCloud || thrown){
      noStroke();
      fill(242,223,169);
      quad(392, 410, 408, 414, 479, 123, 451, 117);
    }
}

function mousePressed(){  
  let mouseIn = (mouseX > 265)
  && (mouseX < 335)
  && (mouseY > 152)
  && (mouseY < 242);

  if(mouseIn && !thrown){
    thrown = true;
    ballX = 300;
    ballY = 190;
    ballSize = 6;
  }
 }

function keyPressed(){
  pitchType = "";
  pitcherMouse = false;
  thrown = false;
  ballX = 300;
  ballY = 190;
  ballSize = 6;
}