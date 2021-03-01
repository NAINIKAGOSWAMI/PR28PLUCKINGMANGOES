
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mang6;
var world,boy;
var stone;
var elastic;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,80,30);
	mango2 = new Mango(1010,160,30);
	mango3=new Mango(960,240,30);
	mango4 = new Mango(1140,210,30);
	mango5=new Mango(900,220,30);
	mango6 = new Mango(1160,140,30);
	mango7=new Mango(980,90,30);
	mango8 = new Mango(1200,200,30);

	stone = new Stone(240,350,20);

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);

	elastic = new Elastic(stone.body,{x:235,y:420})

	
	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  elastic.display();
  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	
	function mouseReleased(){
		elastic.fly();
	}

	function detectColission(lstone,lmango){
		mangoBodypostition = lmango.body.position
		stoneBodyPosition = lstone.body.position
		var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodypostition.x,mangoBodypostition.y)
		if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}
	}
	function detectColission(){
		detectColission(stone,mango1);
		detectColission(stone,mango2);
		detectColission(stone,mango3);
		detectColission(stone,mango4);
		detectColission(stone,mango5);
		detectColission(stone,mango6);
		detectColission(stone,mango7);
		detectColission(stone,mango8);
		
	}

	function keyPressed(){
		if(keyCode === 32){
			Matter.Body.setPosition(stone.body ,{x:235,y:420})
			launcherObject.attach(stone.body);
		}
	}