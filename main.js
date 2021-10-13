let fullScreen = false;
let bullet;

function setup() {
    createCanvas(displayWidth, displayHeight);
    // translate(displayWidth/2, displayHeight/2)
    bullet = new Bullet(null, createVector(displayWidth/2,displayHeight/2));
}


function draw() {
    background(220);
    bullet.draw()
}


function mouseReleased() {
    if (!fullscreen()) {
        fullscreen(true);
    }
}