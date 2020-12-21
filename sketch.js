//Create variables here
var dog, dogHappy
var dogImage,foodStock
function preload()
{
  //load images here
  
dogImage=loadImage("images/dog.png")

}

function setup() {
	createCanvas(600, 600);
  
dog= createSprite(300,400,20,20)
dog.addImage(dogImage)
dog.scale=0.2
}


function draw() {  

  background("lightBlue")

  
  
  drawSprites();
  //add styles here

}



