/*
Style setting functions such as fill(), stroke(), and strokeWeight() must be called before drawing a shape and will be active for
subsequent shapes until the functions are called again to change the styles.
*/


let shapeWidth = 100;

function setup() {
  createCanvas(400, 400);
  
  background(200); 
}

function draw() {
// TODO: Set the top-left line stroke to green

  stroke(0,255,0);
  strokeWeight(1);
  line(width/2 - shapeWidth, 
        shapeWidth/2,
        width/2 - shapeWidth,
        height/2 - shapeWidth/2);

// TODO: Set the top-right point weight to 100 pixels  
  strokeWeight(100);
  point(width/2 + shapeWidth, 
         height/2 - shapeWidth);
  
// TODO: Set the bottom-left triangle to stroke color to red and the stroke weight of 5
  stroke('red');
  strokeWeigt(5);
  triangle(shapeWidth/2, 
           height/2 + shapeWidth/2, 
           shapeWidth/2, height - shapeWidth/2, 
           width/2 - shapeWidth/2, 
           height/2 + shapeWidth/2);

// TODO: Set the bottom-right circle to a transparent stroke
  noStroke();
  circle(width/2 + shapeWidth, 
         height/2 + shapeWidth, 
         shapeWidth);
}








// ordering
// the order of shapes matter. The last shape that was drew will cover previous shapes.
// Styles carry over. After the 1st iteration the previous styles will carry over to shapes that may not need them. stroke() fill() strokeWeight() noFill() noStroke()
function setup() {
  createCanvas(400, 400);
  // TODO: Remove stroke
  noStroke();
}

function draw() {
  background(220);
  
  // Cheese
  fill('#FFFF66');
  rect(50, 50, 300, 300);
  // End cheese

  //TODO: Draw Cheese before Holes
  // Holes
  fill(220);
  circle(100,100, 50);
  circle(225,140, 60);
  circle(150,275, 50);  
  circle(300,250, 20);
  // Endholes
  


}
