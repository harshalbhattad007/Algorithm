var fixedRect, movingRect;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200,60, 50);
  fixedRect.debug = true; 
  movingRect = createSprite(250, 200, 50, 20);
  movingRect.debug = true;
}

function draw() {
  background(0);
   movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;
     //console.log(movingRect.x);
      //console.log(movingRect.width/2 + fixedRect.width/2);
       if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
        fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
        movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2 &&
        fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2)
       { 
       fixedRect.shapeColor = 'red';
     movingRect.shapeColor = 'red'; 
         }
      else 
      {
       fixedRect.shapeColor = 'green';
       movingRect.shapeColor = 'green';
       } 
       drawSprites();

}