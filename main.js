peter_pan_song="";
Harry_potter_theme_song="";

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,530);
}

function preload(){
    peter_pan_song=loadSound("music2.mp3");
    Harry_potter_theme_song=loadSound("music.mp3");
}