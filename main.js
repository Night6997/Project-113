function preload(){

}

function setup(){

    canvas=createCanvas(840,487);
    canvas.position(350,350);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){

image(video,40,55,750,375);

stroke(0,0,0);
fill(0,0,0);
rect(50,17,750,45);

stroke(0,0,0);
fill(0,0,0);
rect(18.5,50,43,400);

stroke(140,0,210);
fill(140,0,210);
circle(40,40,50);

stroke(0,0,0);
fill(0,0,0);
rect(780,50,43,400);

stroke(140,0,210);
fill(140,0,210);
circle(800,40,50);

stroke(0,0,0);
fill(0,0,0);
rect(50,427.5,750,45);

stroke(140,0,210);
fill(140,0,210);
circle(800,450,50);

stroke(140,0,210);
fill(140,0,210);
circle(40,450,50);

}

function takeSnapshot(){
    save("FImage.png");
}

