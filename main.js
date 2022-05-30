function preload(){

}
function setup(){
canvas=createCanvas(1000,750);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
rect(10,10,100,100,20);
rect(890,10,100,100,20);
rect(10,640,100,100,20);
rect(890,640,100,100,20);
strokeWeight(150);
stroke(180,222,232);
line(110,110,890,110);
line(110,110,110,640);
line(890,110,890,640);
line(890,640,110,640);
strokeWeight(20);
fill(65,105,235);
stroke(5,6,75)


image(video,125,93.75,750,562.5);

}
function take_snapshot(){
    save("stuff.png");

}
setInterval(
  function() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }, 1000);