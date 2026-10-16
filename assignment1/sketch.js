function setup() {
  createCanvas(800,450);
}

function draw() {
  background(13,19,33);

  push();

  noFill();
  strokeWeight(2);
  strokeCap(ROUND);
  stroke(45,140,155,95);
  bezier(60,205,85,194,145,216,205,202);
  bezier(30,65,80,55,145,78,205,65);

  stroke(160,85,225,95);
  bezier(405,115,455,105,525,128,590,114);
  bezier(480,55,535,45,610,68,680,55);
  bezier(610,180,660,169,730,193,790,180);

  pop();

  push(); 

  noStroke()
  fill(45,140,155);
  rotate(-0.35);
  ellipse(150,422,120,350);

  pop();

  push();

  noStroke();
  fill(45,140,155);
  beginShape();
  curveVertex(210,210);
  curveVertex(310,180);
  curveVertex(350,140);
  curveVertex(360,40);
  curveVertex(330,80);
  curveVertex(280,100);
  endShape(CLOSE);

  beginShape();
  curveVertex(240,230);
  curveVertex(130,200);
  curveVertex(80,170);
  curveVertex(130,120);
  curveVertex(160,40);
  endShape(CLOSE);

  pop();

  push();

  noFill();
  stroke(150,215,215,200);
  strokeWeight(3);
  strokeCap(ROUND);
  bezier(190,200,130,200,60,170,138,140);
  bezier(210,180,160,0,140,70,145,130);
  bezier(260,185,310,180,350,140,350,70);
  bezier(245,178,300,50,330,130,345,70);

  pop();

  push();

  rotate(-0.35);
  noFill();
  stroke(150,215,215,200);
  strokeWeight(3);
  strokeCap(ROUND);
  arc(132,280,22,18,0,PI);
  arc(165,280,22,18,0,PI);
  arc(120,305,22,18,0,PI);
  arc(150,305,22,18,0,PI);
  arc(179,301,22,18,0,PI);

  pop();

  push();

  noStroke();
  fill(160,85,225);
  beginShape();
  curveVertex(600,270);
  curveVertex(575,320);
  curveVertex(550,390);
  curveVertex(535,470);
  curveVertex(530,500);
  curveVertex(615,480);
  curveVertex(650,410);
  curveVertex(655,330);
  curveVertex(630,270);
  endShape(CLOSE);

  pop();

  push();

  beginShape();
  noStroke();
  fill(160,85,225);
  curveVertex(630,270);
  curveVertex(600,265);
  curveVertex(550,260);
  curveVertex(500,200);
  curveVertex(540,150);
  curveVertex(550,180);
  endShape(CLOSE);

  beginShape();
  fill(160,85,225);
  curveVertex(600,270);
  curveVertex(630,265);
  curveVertex(700,260);
  curveVertex(750,200);
  curveVertex(700,200);
  endShape(CLOSE);

  pop();

  push();

  noFill();
  stroke(244,188,245,190);
  strokeWeight(3);
  strokeCap(ROUND);
  arc(606,280,15,10,0,PI);
  arc(626,280,15,10,0,PI);
  arc(618,290,15,10,0,PI);
  arc(600,290,15,10,0,PI);
  arc(633,290,15,10,0,PI);

  pop();

  push();

  noFill();
  stroke(244,188,245,190);
  strokeWeight(3);
  strokeCap(ROUND);
  bezier(600,260,520,260,480,190,530,160);
  bezier(610,260,515,180,535,160,540,155);
  bezier(635,260,650,260,700,270,740,205);
  bezier(625,260,625,265,700,200,735,200);

  pop();

  fill(13,19,33);
  quad(200,285,350,195,300,415,200,415);

  fill(38,33,66);
  rect(0,300,800,200);

  fill(72,3,85);
  quad(270,430,265,430,280,300,320,300);

  fill(119,66,147);
  beginShape();
  curveVertex(270,340);
  curveVertex(257,348);
  curveVertex(253,363);
  curveVertex(265,376);
  curveVertex(264,390);
  curveVertex(253,405);
  curveVertex(257,421);
  curveVertex(270,430);
  curveVertex(275,390);
  curveVertex(278,374);
  endShape(CLOSE);

  fill(72,3,85);
  quad(382,405,372,405,398,310,408,310);

  fill(119,66,147);
  beginShape();
  curveVertex(365,345);
  curveVertex(378,348);
  curveVertex(382,363);
  curveVertex(370,376);
  curveVertex(371,390);
  curveVertex(382,405);
  curveVertex(378,421);
  curveVertex(365,430);
  curveVertex(360,390);
  curveVertex(347,374);
  endShape(CLOSE);

  fill(148,72,188);
  ellipse(320,260,55,30);
  ellipse(365,280,55,40);
  ellipse(380,315,55,45);
  ellipse(365,350,55,40);
  ellipse(325,365,55,35);
  ellipse(280,355,55,40);
  ellipse(260,320,55,45);
  ellipse(275,280,55,40);

  noStroke();
  fill(148,72,188);
  ellipse(320,315,150,120);

  push();

  noStroke();
  fill(255,190,80,45);
  ellipse(320,310,105,95);

  pop();

  push();

  noFill();
  stroke(54,10,0);
  strokeWeight(7);
  strokeCap(ROUND);
  bezier(294,275,288,215,352,215,346,275);

  pop();

  push();
  
  noStroke();
  fill(54,10,0);     
  quad(291,273,300,275,292,322,284,318);
  quad(349,273,340,275,348,322,356,318);
  
  fill(255,249,203);
  rect(302,272,36,43,7);

  fill(54,10,0);
  rect(296,258,48,15,5);

  rect(286,315,68,12,5);
  ellipse(320,330,55,13);
  stroke(54,10,0);
  strokeWeight(3);
  line(320,320,320,270);
  bezier(347,293,338,300,302,300,293,293);

  pop();

  stroke(0,100);
  strokeWeight(0.2);
  fill(155,198,193,100);
  quad(420,345,510,340,540,370,450,375);

  fill(117,198,195);
  quad(430,235,518,235,518,275,430,275);

  fill(255);
  quad(427,232,515,232,518,235,430,235);
  quad(427,232,430,235,430,413,427,410);

  fill(117,198,195);
  quad(426,231,514,231,515,232,427,232);
  quad(426,231,427,232,427,410,426,409);

  fill(107,208,204);
  quad(430,275,518,275,518,285,430,285);

  fill(99,180,209);
  quad(430,285,518,285,518,411,430,413);

  fill(90,168,196);
  quad(440,295,518,295,518,303,438,308);

  fill(118,153,212);
  quad(450,315,530,310,530,415,450,420);
  fill(255);
  quad(440,310,520,305,530,310,450,315);
  fill(255);
  quad(440,310,450,315,450,420,440,415);
  fill(118,153,212);
  quad(438,308,518,303,520,305,440,310);
  quad(438,308,440,310,440,415,437,413);

  stroke(0,100);
  strokeWeight(0.2);
  fill(155,198,193,100);
  quad(420,345,450,375,450,430,420,410);
  quad(450,375,540,370,540,425,450,430);

  fill(255,190,80,45);
  noStroke();
  ellipse(480,260,70,50);

  fill(63,52,49);
  beginShape();
  vertex(490,250);
  vertex(510,250);
  vertex(510,280);
  vertex(500,290);
  vertex(490,280);
  endShape(CLOSE);

  push();

  stroke(63,52,49);
  strokeWeight(5);
  line(500,290,495,373);

  pop()





  
  







}
