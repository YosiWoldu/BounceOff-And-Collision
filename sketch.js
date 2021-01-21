var fixedRect, movingRect;
var gameobeject1,gameobeject2,gameobeject3,gameobeject4;
var bounce1, bounce2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
 gameobeject1=createSprite(100,100,50,50);
 gameobeject1.shapeColor="green";
 gameobeject2=createSprite(200,100,50,50);
 gameobeject2.shapeColor="green";
 gameobeject3=createSprite(300,100,50,50);
 gameobeject3.shapeColor="green";
 gameobeject4=createSprite(400,100,50,50);
 gameobeject4.shapeColor="green";
 bounce1=createSprite(800,100,50,100);
 bounce1.shapeColor="green"
 bounce2=createSprite(800,600,100,50);
 bounce2.shapeColor="green"
 bounce1.velocityY=5;
 bounce2.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,gameobeject4)){
  movingRect.shapeColor = "red";
  gameobeject4.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  gameobeject4.shapeColor = "green";
}
  bounceoff (bounce1, bounce2)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  
  return true;
}
else {
  
  return false;

}
}
function bounceoff (object1,object2) {
  if (object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.velocityY=-1 * object1.velocityY
      object2.velocityY=-1 * object2.velocityY
      object1.shapeColor="red"
      object2.shapeColor="red"
    }
}