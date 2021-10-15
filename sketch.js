
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var bin_left;
var bin_right;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;




	var ball_options={
		restutution:0.3,
	    friction:0
		//density:1.2
	}
	ground = new Ground(width/2,350,width,10);
	bin_left = new Ground(width-200,270,10,150);
	bin_right = new Ground(width-100,270,10,150);

    right_wall = new Ground(width-1,height/2,10,height)
	left_wall = new Ground(width-width+1,height/2,10,height)
	top_wall = new Ground(400,1,width,10)




	//Create the Bodies Here.
	ball = Bodies.circle(200,200,20,ball_options);
	

	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
  ellipse(ball.position.x,ball.position.y,20);

  

  ground.show();
  bin_left.show();
  bin_right.show();
  right_wall.show();
  left_wall.show();
  top_wall.show();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === RIGHT_ARROW){
		rightForce();
	}

	if(keyCode === UP_ARROW){
		upForce();
	}
	if(keyCode === LEFT_ARROW){
		leftForce();
	}
}

function rightForce() {

		Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0});
	
	  }


function upForce() {
	Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02});
	  
}

function leftForce() {
	Body.applyForce(ball,{x:0,y:0},{x:-0.02,y:0})
}
