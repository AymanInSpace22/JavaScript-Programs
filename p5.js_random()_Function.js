let xPos;
let yPos;
let wSize;
let hSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(30);
  noStroke();
}


function draw() {
 
  
  xPos = random(0, width);
  yPos = random(0, height);
  wSize = random(10, 100);
  hSize = random(10, 100);
  
  
  fill(random(0,256), 0, random(0,256));
  ellipse(xPos, yPos, wSize);
}






// Really Cool Animation
let circleX;
let circleY;
let size;
let counter = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  frameRate(50);
}

function draw(){
  circleX = random(0, width);

  circleY = random(0, height);

  size = random(10,100)
  
  
  counter++;
  if(counter === 0 || counter <= 300){
    fill(random(50,256), random(50, 256), 0);
  }
  else if (counter > 300 && counter <= 600){
    fill(random(50,256), 0, random(50, 256));
  }
  else if(counter >= 401){
    fill(0, random(50,256), random(50,256));
  }

  if(counter === 900){
    counter = 0;
    clear();
    background(0);
    
  }

  // TODO: Create an ellipse with defined variables passed in
  ellipse(circleX, circleY, size);
}



