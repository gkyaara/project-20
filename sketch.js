function setup() {
  createCanvas(1600,400);

  car=createSprite(100, 200, 20, 20);
  
  speed = random(10,70);
  
  weight = random(400,1500);

}
   
  var car,wall;

  var speed,weight;
  
  
function draw() {
 
  background(0,0,0);
  
  car.velocityX=speed;
  car.shapeColor=color("red");

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor= color(80,80,80);
  
  drawSprites();
  
  
 

  
}