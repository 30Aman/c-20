var a,b;
function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="pink"
  b=createSprite(200,200,30,80);
  b.shapeColor="pink"
}

function draw() {
  background(0);  
  a.x=World.mouseX;
  a.y=World.mouseY;
  if(a.x-b.x<=a.width/2+b.width/2&&b.x-a.x<=a.width/2+b.width/2 &&a.y-b.y<=a.height/2+b.height/2&&b.y-a.y<=b.height/2+a.height/2) {
     a.shapeColor="green"
      b.shapeColor="green"
  }
  else{
    b.shapeColor="pink"
    a.shapeColor="pink"
  }
  drawSprites();
}