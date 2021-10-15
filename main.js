let fullScreen = false;
let bullet;
let v1;

let bullets = new Array();

function setup() {
    createCanvas(displayWidth, displayHeight);
    // translate(displayWidth/2, displayHeight/2)
    angleMode(DEGREES);
}


function draw() {
    noStroke();
    background(220);

    for(let b=0; b < bullets.length; b++) {
        bullets[b].update()
    }
    // let v0 = createVector(50, 50);
    // v1 = createVector(mouseX - 50, mouseY - 50);
    // drawArrow(v0, v1, 'black');
    // let myHeading = v1.heading();
    
}


function mouseReleased() {
    if (!fullscreen()) {
        fullscreen(true);
    }

    bullets.push(new Bullet(null, createVector(mouseX, mouseY), createVector(random(0, width), random(0, height))));
}

function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
}  