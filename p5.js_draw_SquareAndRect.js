// draw rect and square
// rect() takes 4 parameters: (x, y, width, height)
// square() takes 3 parameters: (x, y, width)
  // rect or square are anchored from their top left corner
function setup(){
  createCanvas(400, 400);
  background(200);
}

function draw(){
  // Your drawing code goes here
  // TODO: Draw a rectangle at (30, 20), 100px width and 200px height
  rect(30,20,100,200);

  // TODO: Draw a square at (250, 100) and 100px width
  square(250,100,100);  
}





// draw circle and ellipse
// ellipse() takes 4 params: (x,y,width,height)
// circle() takes 3 params: (x,y,width)
  // a circ or ellipse is anchored from its center, not top left corner
function setup(){
  createCanvas(400, 400);
  background(200);
}

function draw(){
  // Your drawing code goes here
  // TODO: Draw an ellipse at (150, 200), 150px width and 100px height
  ellipse(150,200,150,100);

  // TODO: Draw a circle at (300, 150) and 75px width
  circle(300,150,75)
}







// draw triangle and quadrillateral
// triangle takes 6 params: (x1,y1,x2,y2,x3,y3)
// quad takes 8 params: (x1,y1,x2,y2,x3,y3,x4,y4)
function setup(){
  createCanvas(400, 400);
  background(200);
}

function draw(){
  // Your drawing code goes here
  // TODO: Draw a triangle
  triangle(50,55,65,60,50,75);

  // TODO: Draw a triangle that shares one vertex with the one above
  triangle(50,55,80,86,50,100);

  // TODO: Draw a quadrilateral
  quad(100,110,200,215,200,300,100,180);

  // TODO: Draw a quadrilateral that shares one vertex with the one above
  quad(200,300, 300,350,305,370,180,350);
}
