const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var compBase, playerBase;
var player1, player2;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  compBase = new ComputerBase(windowWidth/4, windowHeight/1.5, windowWidth/7, windowHeight/6);
  playerBase = new PlayerBase(windowWidth/1.35, windowHeight/1.5, windowWidth/7, windowHeight/6);
  player1 = new Player(playerBase.body.position.x, windowHeight/2, windowWidth/15, windowHeight/5);
  player2 = new Player(compBase.body.position.x, windowHeight/2, windowWidth/15, windowHeight/5);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  compBase.display();
  playerBase.display();
  player1.display();
  player2.display();
   //display Player and computerplayer


}
