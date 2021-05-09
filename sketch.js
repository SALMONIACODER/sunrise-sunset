const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var sunrise1 ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    if(backgroundImg)
    background(backgroundImg)
  //  background("black")
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
        var response= await fetch("http://worldclockapi.com/api/json/est/now")


        var responseJSON= await response.json()
    

        var datetime=responseJSON.currentDateTime
    
        var hour=datetime.slice(11,13);
        //console.log(responseJSON.currentDateTime)
        //console.log(hour)
    
        if(hour>=04&&hour<=06){
            sunrise1="sunrise1.png"
         }
    
         backgroundImg=loadImage(sunrise1)
    
    }


