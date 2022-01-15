function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  // TODO: Comment out the below rectangle functions
  /*
  rect(25, 25, 50, 50);
  rect(100, 25, 50, 50);
  rect(175, 25, 50, 50);
  rect(250, 25, 50, 50);
  rect(325, 25, 50, 50);
  */

  /* refactored
  for(let i = 0; i < 5; i++){
    rect(25 + i * 75, 25, 50, 50);
  }
  */

  // TODO: Draw a grid of rectangles using for loops
  // Refactored plus a nested loop
  for(let posX = 0; posX < 5; posX++){
    for(let posY = 0; posY < 5; posY++) {
      rect(25+ posX * 75, 25 + posY * 75, 50, 50);
    }
  }
}




/* make a a 3d looking ellipse

function draw() {
  background(220);
  for(let i = 0; i < 255; i++){
    fill(i);
    circle(width/2, height/2, 255-i);
  }
}
*/






/* draw a grid of circles
function draw() {
  for(let posX = 0; posX < 4; posX++)  {
    for(let posY = 0; posY < 4; posY++)  {
      circle(posX * 25, posY * 25, 50);
    }
  }
}
*/



