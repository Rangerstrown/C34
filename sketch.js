const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12
var ball,ground,chain

function preload() {
   //getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(200,200,80,80)

    ground = new Ground(600,700,1200,20);

    box1 = new Box(700,100,70,70);
    box2 = new Box(700,100,70,70);
    box3 = new Box(700,100,70,70);
    box4 = new Box(700,100,70,70);
    box5 = new Box(700,100,70,70);
    box6 = new Box(700,100,70,70);
    box7 = new Box(700,100,70,70);
    box8 = new Box(700,100,70,70);
    box9 = new Box(700,100,70,70);
    box10 = new Box(700,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);
    box13 = new Box(800,100,70,70);
    box14 = new Box(800,100,70,70);
    box15 = new Box(800,100,70,70);
    
    chain = new Chain(ball.body,{x:500, y:50});
}

function draw(){
   
        background("white");
    
        
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    ball.display();

    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    
    chain.display();    
}

function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
       
        // var x= 20 
        // var xyz= { x:20, y:30, z:45}// JSON
        // var arr= [20,30,45]// array 
   // }
}

/*
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && gameState==="launched"){
        Matter.Body.setPosition(bird.body, { x: 200 , y: 50});
       slingshot.attach(bird.body);
      gameState = "onSling"
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}


/*  create empty birds array 
create multiple bird bodies ( objects of bird.js) bird2 = new Bird( 150,170)
push these birds into the array in reverse order ( birds.push ( bird4))

display all birds in the function draw ()

in function mouseDragged ?(?) --- set position of the last element of the birds array 
Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body, {x:5,y:-5} ) */
