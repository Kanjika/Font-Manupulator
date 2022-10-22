noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function preload()
{

}


function setup()
{
    canvas = createCanvas(550, 550);
   canvas.position(750, 150)

    video = createCapture(VIDEO)
    video.position(30,150)
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('PoseNet Is Initialised');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = "+noseX +"nose Y"+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX +"rightWristX = "+ rightWristX);
    
    }
}

function draw()
{

document.getElementById("size").innerHTML = "Width And Height of a Square will be = " + difference +"px";

    background('#969A97');
    fill('#F9003');
    textSize(difference);
    text( 'Kanjika', noseX, noseY)
}