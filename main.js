nose_x = 0;
nose_y = 0;

difference = 0;
right_wrist_x = 0;
left_wrist_x = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("Nose_x = " + nose_x + " Nose_y = " + nose_y);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("Left_wrist_x = " + left_wrist_x + " Right_wrist_x = " + right_wrist_x + " & Difference = " + difference);
    }

}

function draw(){
    background("red");
    document.getElementById("square_side").innerHTML = "Width and Height of the square will be = " + difference + "px";
    fill("blue");
    stroke("blue");
    square(nose_x , nose_y , difference);

}






