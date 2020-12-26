var  wall,greyWall,greenWall,redWall,thickness;
var bullet,bulletImg,speed, weight;

function preload (){
bulletImg = loadImage("bullet.png");
greyWall = loadImage("greywall.png");
greenWall = loadImage("greenwall.png");
redWall = loadImage("redwall.png");
}

function setup(){
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,60,15);
  bullet.velocityX = speed;
  bullet.shapeColor="white";
  bullet.addImage(bulletImg);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  wall.addImage(greyWall);
  wall.scale = 0.5;
}

function draw(){
  background("black")

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){

    bullet.velocityX = 0;

    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      //wall.shapeColor = "red";
      wall.addImage(redWall);
      wall.scale = 0.5;
    }
    
    if(damage<10){
      //wall.shapeColor = "green";
      wall.addImage(greenWall);
      wall.scale = 0.5;
    }
  }
  console.log(damage);

  drawSprites();
}