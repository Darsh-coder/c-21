var movingrect,fixrect
var move,fix
var ball ,paddle




function setup() {
  createCanvas(800,400);
 movingrect= createSprite(100, 200, 50, 50);
 movingrect.shapeColor="blue"

ball= createSprite(400, 350, 50, 50);
 ball.shapeColor="brown"

paddle= createSprite(400, 50, 50, 50);
 paddle.shapeColor="pink"

ball.velocityY=-12
paddle.velocityY=12



 move= createSprite(100, 300, 50, 50);
 move.shapeColor="green"

 fix= createSprite(700, 300, 50, 50);
 fix.shapeColor="red"

 

 fixrect= createSprite(700, 200, 50, 50);
 fixrect.shapeColor="black"

 /*movingrect.velocityX=5
 fixrect.velocityX=-12
 fix.velocityX=-5
 move.velocityX=12*/
}

function draw() {
  background(255,255,255);  

  istouching (movingrect,fixrect)
  istouching (move,fix)
  
  istouching (ball,paddle)

  drawSprites();
}

function istouching (obj1,obj2){

  if (obj1.x-obj2.x<obj1.width/2+obj2.width/2
    && obj2.x-obj1.x<obj1.width/2+obj2.width/2){
console.log("touch")
   obj1.velocityX=obj1.velocityX*(-1)
   obj2.velocityX=obj2.velocityX*(-1)
  }
if ( obj1.y-obj2.y<obj1.height/2+obj2.height/2
  && obj2.y-obj1.y<obj1.height/2+obj2.height/2){
    obj1.velocityY=obj1.velocityY*(-1)
    obj2.velocityY=obj2.velocityY*(-1) 
}
}


