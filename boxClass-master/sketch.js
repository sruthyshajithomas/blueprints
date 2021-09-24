const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5
var ground;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(100,100,50,50);
    box3 = new Box(230,250,100,100);
    box4 = new Box(300,300,60,60);
    box5 = new Box(190,290,90,90);
    ground=new Ground(200,height,400,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
box2.display();
box3.display();
box4.display();
box5.display();

}