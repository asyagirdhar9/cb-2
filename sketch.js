 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,paper1;
var part1,part2,part3;
function preload()
{
}
function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
ground1=new Ground(width/2,680,width,10);
paper1=new Paper(200,450,70);

part1= new Dustbin(650,610,20,110);
part2=new Dustbin(750,610,20,110);
part3=new Dustbin(700,663,120,20);
Engine.run(engine);
}
function draw() {
rectMode(CENTER);
background(200);
keypressed();
ground1.display();
part1.display();
part2.display();
part3.display();
paper1.display();
drawSprites();
}
function keypressed()
{
if (keyCode === UP_ARROW)
{
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100, y:-100})
}
}
class Ground {
constructor(x,y,width,height) {
  var options = {
      isStatic: true
  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  rectMode(CENTER);
  fill("yellow");
  rect(pos.x, pos.y, this.width, this.height);
}
};
 
 
 

