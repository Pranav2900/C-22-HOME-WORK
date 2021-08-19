
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(500,590,1000,20);
	leftSide = new Ground(600,500,20,200);
	rightSide = new Ground(800,500,20,200);
  var ball_options={
	  isStatic:false,
	  restitution:0.85,
	  friction:0,
	  density:1.2
  }
	//Create the Bodies Here.
	ball=Bodies.circle(100,200,20,ball_options);
	World.add(world,ball);
    
	

	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  
  background(0);
  ground.show();
  leftSide.show();
  rightSide.show();
  
  
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
  keyPressed();
  
}
function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball,{x:0,y:-1},{x:1,y:0});
	}
}



