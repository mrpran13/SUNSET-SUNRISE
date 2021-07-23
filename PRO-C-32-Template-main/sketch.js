const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;
var bg ;

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

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
if(time>=12){
    text("TIME "+time%12+"PM",600,200)
}
else if(time===0){
    text("TIME :12 AM",600,200)
}
else{
    text("TIME "+time%12+"AM",600,200)
}

}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")


//console.log(dateTime)
    //change the data in JSON format
    var responseJSON=await response.json()
    var dateTime=responseJSON.datetime
    // write code slice the datetime
     time=dateTime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
if(time>=04 && time<06){
bg="sunrise1.png"    
}
else if(time>=06 && time<=08){
        bg="sunrise2.png"
    }
    else if(time>=08 && time<=10){
        bg="sunrise3.png"
    }
    else if(time>=10 && time<=13){
        bg="sunrise4.png"
    }
    else if(time>=13 && time<=16){
        bg="sunrise5.png"
    }
    else if(time>=16 && time<=18){
        bg="sunrise6.png"
    }
    else if(time>=18 && time<=20){
        bg="sunset7.png"
    }
    else if(time>=20 && time<=22){
        bg="sunset8.png"
    }
    else if(time>=22 && time<=24){
        bg="sunset9.png"
    }
    else if(time>=24 && time<=02){
        bg="sunset10.png"
    }
    else if(time>=02 && time<=03){
        bg="sunset11.png"
    }
    else{
        bg="sunset12.png"
    }

    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg)
}
