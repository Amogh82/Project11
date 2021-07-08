var track
var runner
var trackImg
var runnerImg
var wall1
var wall2

function preload()
{
  //pre-load images
  trackImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup()
{
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200,400,400);
  track.addImage(trackImg);
  runner = createSprite(200,300,50,50);
  runner.addAnimation('runner',runnerImg);
  runner.scale = 0.05;
  track.velocityY = 10;
  track.scale = 1.2;
  wall1 = createSprite(365,200,3,400);
  wall1.visible = false
  wall2 = createSprite(45,200,3,400);
  wall2.visible = false
}

function draw() 
{
  background(0);

  if(track.y > 400)
  {
    track.y = height/2;
  }

  if(keyDown("right"))
  {
    runner. x = runner.x + 5
  }

  if(keyDown("left"))
  {
    runner. x = runner.x - 5
  }
  console.log(runner.x);

  runner.collide(wall1);
  runner.collide(wall2);

  drawSprites();
}
