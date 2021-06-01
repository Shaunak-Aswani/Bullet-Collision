var car, wall, thickness;
var speed, weight;
var deformation;
function setup() {
  createCanvas(1600,400);

  background("GRAY");
  //Bullet is too fast to collide with wall and stop
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(25,200)
  weight = random(400,1500);
  bullet = createSprite(50,200,20,4);
 
  wall = createSprite(1200,200,thickness,400);
  wall.shapeColor = "grey";

  Destruction = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(Destruction>10){
    bullet.shapeColor = ("red");
  } else if(Destruction<10){
    bullet.shapeColor = ("green");
  }
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  
  bullet.collide(wall);
  
  textSize(20);
  text("Weight: " + weight,50,120);
  text("Speed: " + speed,50,140);
  text("Wall Thickness: " + thickness,50,160)
  text("Destruction of Wall: " + Destruction,50,80);
  
  


  drawSprites();

}