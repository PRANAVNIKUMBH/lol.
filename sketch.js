var gameState = 0

function preload (){
  bgimg = loadImage('i/bg.png')
  bi = loadAnimation('0.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png')
  wi = loadImage("i/wall.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  b = createSprite(50,height/2)
  b.addAnimation('b',bi)
  wg  = createGroup()
}

function draw() {
  background(bgimg); 
  if (gameState===0){

  
  w() 
  if (keyDown("space")){
    b.velocityY = -5 
  }
  
  
  b.velocityY = b.velocityY+0.3

  if (b.isTouching(wg)){
    gameState = 1
  }

  
}


if (gameState===1){
  textSize(25)
 text("BETTER LUCK NEXT TIME",width/2-100,height/2)
 

}

b.debug = true
  drawSprites();
}

function w(){
  if (frameCount%120===0){
    wall = createSprite(width,height/2)
    wall.addImage(wi)
    wall.velocityX = -2
    wall.scale = 5
    wall.debug = true
    wall.setCollider("rectangle",0,0,300,600)
    wg.add(wall)
  }
}

