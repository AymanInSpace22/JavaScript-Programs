var player = {
  speed: 5,
  pos: {
    x: 1,
    y: 1
  },
  spriteDimensions: {
    w: 50,
    h: 50
  }
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  noStroke();
  fill('laural');
  handleInput();
  ellipse(player.pos.x, player.pos.y, 50, 50);
}

function handleInput() {
  if(keyIsDown(LEFT_ARROW)) {
    player.pos.x -= player.speed;
  } else if(keyIsDown(RIGHT_ARROW)) {
    player.pos.x += player.speed;
  }
  
  if(keyIsDown(UP_ARROW)) {
    player.pos.y -= player.speed;
  } else if(keyIsDown(DOWN_ARROW)) {
    player.pos.y += player.speed;
  }
}
