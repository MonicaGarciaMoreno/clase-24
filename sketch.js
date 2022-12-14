
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//2
// Crear una variable para almacenar el botón
//var btn2;



function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  var ground_options = {
    isStatic: true
  };


  //3
  // crear el botón usando la función "createImg"
  //btn2 = createImg('up.png');

  // 4
  // se establece la posición del botón
  //btn2.position(350,30);

  //5
  // se establece el tamaño del botón
  //btn2.size(50, 50);

  // 6 
  // usamos la función "mouseClicked()"" para establecer la función. 
  // se pasa como argunameto la función creada
  //btn2.mouseClicked(vForce);
  
  ground = Bodies.rectangle(100, 400, 400, 20, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);




  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);




  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 500, 20);

  console.log(ground.position.y);



}

// 1
//function vForce()
//{
  //Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
//}
