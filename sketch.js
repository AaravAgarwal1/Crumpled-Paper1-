
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rightSide,leftSide,bottom;
var ground;
var paper;

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;



	var option={
		isStatic:true,
		density:1,
		restiution:0
	}

	//Create the Bodies Here.
	paper= new Paper(100,400,20);
	leftSide= createSprite(850,420,20,100,option);
	World.add(world,leftSide);
	rightSide= createSprite(1000,420,20,100,option);
	World.add(world,rightSide);
	bottom= createSprite(930,460,150,20,option);
	World.add(world,bottom);
	ground= createSprite(400,500,1600,25,option);
	World.add(world,ground);
	
	Engine.run(engine);




  
}


function draw() {
  rectMode(CENTER);
  background(0);


//   ground.display();
  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:85,
			y:-85
		});
	}
}



