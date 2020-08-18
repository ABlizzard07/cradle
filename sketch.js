/* var num = 4;
var string = "Aashish";
var boolean = 1;
var arr1 = [1,2,3,4];
var arr2 = ["One","Two","Three","Four"];
var arr3 = [[1,2,3],["One","Two","Three"],[true, false]];

console.log(num);
console.log(string);
console.log(boolean);
console.log(arr1);
console.log(arr1[0]);
console.log(arr2[2]);
console.log(arr2.length);
console.log(arr3[1][1]); */

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5
var rope1, rope2, rope3, rope4, rope5

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
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:100});
	}  
}



