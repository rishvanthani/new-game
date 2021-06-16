const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World






var backgroundImg
var engine
var world
var box1,box2





function preload(){

backgroundImg = loadImage("background.jpg")



}


function setup() {

  engine = Engine.create()
  world = engine.world;
  createCanvas(800,400);

  box1= new Box(350,200,50,50)
  box2=new Box(410,200,50,50)
  box3=new Box(250,350,50,50)
  box4=new Box(310,350,50,50)
  box5=new Box(370,350,50,50)
  box6=new Box(430,350,50,50)
  box7=new Box(650,350,150,50)



}

function draw() {
  background(backgroundImg);

  textSize(35)
  fill("red")
  strokeWeight(5)
  text("Choose The Missing Letter",200,100)
  
  
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
}




/*function mouseDragged(){

  Matter.Body.setPosition(box3.body,{x:mouseX ,y:mouseY})

  
  
  }
  

function mouseDragged(){

  
  Matter.Body.setPosition(box4.body,{x:mouseX ,y:mouseY})
 
  }
  function mouseDragged(){

    Matter.Body.setPosition(box5.body,{x:mouseX ,y:mouseY})
  
    }
    function mouseDragged(){

     

      Matter.Body.setPosition(box6.body,{x:mouseX ,y:mouseY})
       
      }
      
     

function mouseReleased(){

  Matter.Body.setPosition(box3.body,{x:410 ,y:200})

}
function mouseReleased(){

  Matter.Body.setPosition(box4.body,{x:410 ,y:200})
}
function mouseReleased(){

  
  Matter.Body.setPosition(box5.body,{x:410 ,y:200})
 
}
function mouseReleased(){

 
  Matter.Body.setPosition(box6.body,{x:410 ,y:200})

}*/
if(box3.body){
function mouseClicked(){

Matter.Body.setPosition(box3.body,{x:410,y:200})


}
}
if(box4.body){
function mouseClicked(){

  Matter.Body.setPosition(box4.body,{x:410,y:200})
  
  
  }
}
if(box5.body){
  function mouseClicked(){

    Matter.Body.setPosition(box5.body,{x:410,y:200})
    
    
    }
  }
  if(box6.body){
    function mouseClicked(){

      Matter.Body.setPosition(box6.body,{x:410,y:200})
      
      
      }
    }