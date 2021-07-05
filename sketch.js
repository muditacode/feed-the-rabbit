var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  orangeleafImg=loadImage("orangeLeaf.png");
  redImg=loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites=Math.round(random(1,3))
if(frameCount%80===0){
if(select_sprites===1){
  createApples();
}
else if(select_sprites===2){
  createOranges();
}
else if(select_sprites===3){
  createRed();
} 
}
  drawSprites();

}
function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY=3;
  apple.lifetime=150;
  apple.scale=0.07;

}
function createOranges(){
  orangel=createSprite(random(50,350),40,10,10);
  orangel.addImage(orangeleafImg);
  orangel.velocityY=3;
  orangel.lifetime=150;
  orangel.scale=0.07;

}
function createRed(){
  redl=createSprite(random(50,350),40,10,10);
  redl.addImage(redImg);
  redl.velocityY=3;
  redl.lifetime=150;
  redl.scale=0.07;

}
