noseX = 0;
noseY = 0;
RightWristX = 0;
LeftWristX = 0;
difference =0;

function setup() {

video = createCapture(VIDEO);
video.size(450,400);
video.position(100,220);

canvas = createCanvas(400,400);
canvas.position(640,220);

poseNet = ml5.poseNet(video,modelLoaded);

poseNet.on("pose",gotposes);
}



function modelLoaded(){

console.log("Posenet is Initialized");

}


function draw() {

background("white");
document.getElementById("square_size").innerHTML = "Length of the Square = " + difference ;
fill(document.getElementsByTagName("input")[0].value);
if (document.getElementsByTagName("input")[1].value == "square") {

    square(noseX,noseY,difference);
    
}

else if(document.getElementsByTagName("input")[1].value == "circle") {

    circle(noseX,noseY,difference);

}



}



function gotposes(results) {
if (results.length > 0) {

console.log(results);
noseX = results[0].pose.nose.x ; 
noseY = results[0].pose.nose.y ; 

RightWristX = results[0].pose.rightWrist.x ;
LeftWristX = results[0].pose.leftWrist.x ;

difference = floor(LeftWristX - RightWristX);


}


}