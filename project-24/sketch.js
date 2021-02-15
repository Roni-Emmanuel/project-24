var hammer;
var stone;
var rubber;
var ground;
var sand1,sand2,sand3,sand4,sand5;
var plane;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	hammer = new Hammer(750,250);
	stone = new Stone(100,100);
	rubber = new Rubber(200,200,100,100);
	plane = new Plane(800,700,1700,20);
	sand1 = new Sand(695,126,10,10);
	sand2 = new Sand(595,656,10,10);
	sand3 = new Sand(125,346,10,10);
	sand4 = new Sand(735,446,10,10);
	sand5 = new Sand(235,566,10,10);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");

  
  hammer.display();

  stone.display();

  rubber.display();

  plane.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();

  drawSprites();
 
}



