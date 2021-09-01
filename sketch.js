var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  box1= createSprite(200,200,60,30)
  box1.velocityX=5
  box2= createSprite(400,200,20,30)
  box2.velocityX=-5
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
if(box2.x-box1.x<box1.width/2+box2.width/2 &&box1.x-box2.x<box1.width/2+box2.width/2){
  box1.velocityX=box1.veloityX*-1
  box2.velocityX=box2.velocityX*-1
}

else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}
