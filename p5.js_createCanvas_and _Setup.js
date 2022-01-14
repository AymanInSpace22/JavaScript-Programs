function setup(){
  // Setup code goes here
  createCanvas(400, 400);
  // TODO: Set the background color of the canvas
  //background(150); static canvas
  background(Math.floor(Math.random() * 256));
}




//put bg color in draw function to get dynamic bg
function setup() {
  // Your setup code goes here
  createCanvas(400, 400);
  // Run the draw() function once per second (you will learn about the frameRate() function in a later lesson)
  frameRate(1);
  // TODO: Move the background() function below to the draw() function
}

function draw() {
  // Your drawing code goes here
  // TODO: Set background color to a random gray value
  background(Math.floor(Math.random() * 256));
}

