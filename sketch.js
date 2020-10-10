
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, boy1, stone1, tree1;
var mango1, mango2, mango3;
var slingshot;

function preload()
{
	boy=loadImage("Sprites/boy.png")
}

function setup() 
{
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,600,width,20);

	//boy1 = new boy(60,530);

	mango1 = new mango(1100,100,20);
	mango2 = new mango(1170,130,20);
	mango3 = new mango(1000,70,20);
	mango4 = new mango(1100,70,20);
	mango5 = new mango(1140,150,20);
	mango6 = new mango(900,160,20);

	tree1 = new tree(1050,320);

	stone1 = new Stone(235,420,30);

	slingshot = new SlingShot(stone1.body, {x: 235, y: 420});

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightblue");
  image(boy ,200,340,200,300);
  ground.display();
  tree1.display();

  //boy1.display();
  stone1.display();

  slingshot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

    detectCollision(stone1, mango1);
	detectCollision(stone1, mango2);
	detectCollision(stone1, mango3);
	detectCollision(stone1, mango4);
	detectCollision(stone1, mango5);
	detectCollision(stone1, mango6);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body,{x: mouseX, y: mouseY});
}

function mouseReleased()
{
	slingshot.fly();
}

function detectCollision(lstone, lmango)
{
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false)
}
}


