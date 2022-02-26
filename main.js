difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!!!");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    console.log("x= "+leftWristX);
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log(difference);
    }
}

function draw(){
    background('blue');
    document.getElementById("font_size").innerHTML="The font size is: "+difference;
    textSize(difference);
    fill('orange');
    text('Dhriti',50,400);
}