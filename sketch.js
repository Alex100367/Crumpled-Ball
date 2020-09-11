const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, paperObject, basket1, basket2, basket3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,390,1200,20,ground_options);
    World.add(world,ground);

   paperObject = new paper(200,200,20,20);
   basket1 = new basket(1000,370,100,20);
   basket2 = new basket(950,355,20,50);
   basket3 = new basket(1050,355,20,50);

console.log(ground);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
    paperObject.display();
    basket1.display();
    basket2.display();
    basket3.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){

     Matter.Body.applyForce(paperObject.ball,paperObject.ball.position,{x:85,y:-85});
    }
}