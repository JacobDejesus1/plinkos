const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,650);
  engine = Engine.create();
  world = engine.world;
  ground= new Division(240,640,480,10)
  for (var k = 0; k<=width; k = k +80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j =40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j =15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display()  
  for (var i = 0; i< particles.length; i++){

    particles[i].display();
  }
  for (var k = 0; k< divisions.length; k++){

    divisions[k].display();
  }
  for (var p = 0; p< plinkos.length; p++){

    plinkos[p].display();
  }
  if(frameCount%30){
    particles.push(new Particle(random(width/2+30,width/2+30),10,10))
  }
}