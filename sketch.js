var PLAY = 1;
var END = 0;
var gameState = PLAY;




var cupImg , cupcorrendoImg , fundoImg ;
var cuphead , fundo , obstacleGroup ;



function preload(){
    cupImg= loadAnimation("frame-01.gif","frame-02.gif","frame-03.gif","frame-04.gif","frame-05.gif","frame-06.gif","frame-07.gif","frame-08.gif","frame-09.gif","frame-10                                                                                         .gif");
    cupmorrendoImg = loadImage("cuphead-removebg-preview.png");
    fundoImg = loadImage ("fundo.jpg");
    obstacleImg = loadImage ("obstacle-removebg-preview.png");
}

function setup() {
    createCanvas(1000,742);
  
  fundo= createSprite(1000/2,742/2);
  fundo.addImage(fundoImg);
  fundo.velocityX = -1;                                        
  
  cuphead = createSprite(100,480);
  cuphead.scale = 0.3;
  cuphead.addAnimation("correndo",cupImg);
  

  obstacle = createSprite(200,10);
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.2;
 

  obstacleGroup.newGroup();
}

function draw() {
  
  if(obstaclesGroup.isTouching(cuphead)){
    obstacleGroup.setVelocityEach();
    cuphead.addImage(cupmorrendoImg);
    gameState = END;
  }

  if(gameState === PLAY){
    if(fundo.x > 1000 ){
      fundo.x = 900 ;
      }
      if(keyDown("space")) {
        cuphead.velocityY = -2;
        }
      }

if(gameState === END){


 







 drawSprites();
}
function obstacle(){

  if (frameCount % 240 === 0) {
    var obstacle = createSprite(300,200);
    obstacle.velocityX = 3;
    obstacle.addImage(obstacleImg);
  obstacle.scale = 0.2;
  obstacleGroup.add(obstacle);
  obstacleGroup.lifetime = 100;
    }
  }
}


