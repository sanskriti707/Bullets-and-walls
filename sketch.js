var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,152);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,20);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
   
  
}


function draw() {
  background(0);
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation = 0.5* weight * speed * speed / thickness*thickness*thickness;
    if(thickness>=70)
      {
        wall.shapeColor="green";
      
      }
      if(thickness<=40)
        {
          wall.shapeColor="Red";
        
        }
    
  }

   
   
  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}