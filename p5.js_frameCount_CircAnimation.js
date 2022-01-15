function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(50);
}

function draw() {
  background(0);

  //Draw moving ellipse
  fill(255);
  // TODO: draw an ellipse with frameCount as the x position
  ellipse(frameCount, height/2,300,300);


  //Draw text 
  fill(120); 
  textSize(72);
  textAlign(CENTER);

  // TODO: create text with frameCount displayed in sketch
  text(frameCount + ' \n Frames', width/2,height/2);

}
