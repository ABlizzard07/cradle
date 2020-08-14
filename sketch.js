const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var position =0;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;	

	bob1 = new Bob(310,500,40);
	bob2 = new Bob(350,500,40);
	bob3 = new Bob(390,500,40);
	bob4 = new Bob(430,500,40);
	bob5 = new Bob(470,500,40);
	roof = new Roof(390,250,250,30);
	rope1 = new Rope(bob1.body,roof.body,-80,10);
	rope2 = new Rope(bob2.body,roof.body,-40,10);
	rope3 = new Rope(bob3.body,roof.body,0,10);
	rope4 = new Rope(bob4.body,roof.body,40,10);
	rope5 = new Rope(bob5.body,roof.body,80,10); 

	Engine.run(engine);
  
}


function draw() {
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.setStatic(bob1.body,false);
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:100});
	}  
}



