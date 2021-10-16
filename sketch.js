var spaceship , background , laser;
var spaceship_img , background_img , laser_img;
var explosionSound , laserSound;
var canvas;


function preload(){
  background_img = loadImage("background.png");
  spaceship_img = loadImage("spaceship.png");
  laser_img = loadImage("laser.png");
  explosionSound = loadSound("explosion.mp3");
  laserSound = loadSound("laser.mp3");
}

function setup(){
    canvas = createCanvas(displayWidth , displayHeight);
  background = createSprite(500,100,30,20);
  background.addImage("background",background_img);
  background.velocityY = +3 

    if (background.x < 0){
      background.x = background.width/2;
    }

  spaceship = createSprite(550,650);
  spaceship.addImage(spaceship_img);
  spaceship.scale = 0.6;

}

function draw(){
drawSprites()
}