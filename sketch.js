
function setup() {
  createCanvas(1366,625);



}

function draw() {
  background("white");
  fill("white");
  strokeWeight(5)

  // mid tri
  triangle(620,160,750,159,683,50)
 // middle tow
 rect(620,160,130,190)
 // middle window
 rect(660,200,50,50);

// small middle tows
 rect(380,295,70,70);
 rect(480,295,80,60);
 rect(590,295,80,60);
 rect(700,295,80,60);
 rect(810,295,80,60);
 rect(920,295,80,60)



  // middle bottom tow
  rect(280,350,720,220);

  // left tri
  triangle(252,187,378,187,315,90);
  // left tow
  rect(250,190,130,380);
  //left window
  rect(280,240,70,70);

  // right tow
  rect(995,190,130,380);
  // right window
  rect(1025,240,70,70);
  // right triangle
  triangle(997,187,1123,187,1060,90)
  arc(690, 564, 130, 265,178, PI + QUARTER_PI);

  
 
  
  
  
  drawSprites();
} 