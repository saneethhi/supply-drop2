var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redboxLeft, redboxRight, redboxCenter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(400, 350);
	rectMode(CENTER);
	
	redboxCenter = createSprite(200,340,200,20, redboxCenter_options);
	redboxLeft = createSprite(100,340,10,100);
	redboxRight = createSprite(300,340,10,100);
	redboxCenter.shapeColor = "red";
	redboxRight.shapeColor = "red";
	redboxLeft.shapeColor = "red";
	var redboxCenter_options = {
		isStatic: true
	}
	

	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageSprite.x = packageSprite.position.x;
	packageSprite.y = packageSprite.position.y;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
    Matter.Body.setStatic(packageBody, false);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10);
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packageSprite.velocityY = 7;
    
  }
}



