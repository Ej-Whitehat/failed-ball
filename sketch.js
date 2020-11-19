
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

function preload(){
	
}

function setup() {
	createCanvas(1350, 600);
    engine = Engine.create();
    world = engine.world;

	ground1 = createSprite(width/2, 595, 1350, 10);
  ground1=Bodies.rectangle(width/2, 595, 1350, 10);
  World.add(world,ground1);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new Ball(300, 200, 25);

  var options1={
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
  paper = Bodies.circle(300,200,25, options1);
  paper.shapeColor=color("red");
  paper.collide("ground1");

  binB = createSprite(1000, 580, 200, 20);
  binB.shapeColor=color("red");
  binL = createSprite(900, 530, 20, 200);
  binL.shapeColor=color("red");
  binR = createSprite(1100, 530, 20, 200);
  binR.shapeColor=color("red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100,255,255);
  Engine.update(engine);

  paper1.display();
  
  drawSprites();
 
}