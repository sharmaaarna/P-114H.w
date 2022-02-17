function preload(){

}

function setup(){
    Canvas=createCanvas(600,400);
    Canvas.center();
    Video=createCapture(VIDEO);
    Video.hide();
}

function draw(){
    image(Video,0,0,600,400);
}