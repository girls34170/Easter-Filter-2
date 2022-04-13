bunnyx=0;
bunnyy=0;
function preload(){
 bunnyears=loadImage("https://i.postimg.cc/qvGX1qc5/bunny.png");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model has loaded");
}
function gotposes(results){
if(results.length>0){
    console.log(results);
    bunnyx=results[0].pose.nose.x-90;
    bunnyy=results[0].pose.nose.y-300;
} 
}
function draw(){
   image(video,0,0,600,500);
   image(bunnyears,bunnyx,bunnyy,200,250);
}
function takesnapshot(){
    save("bunny.png");
}