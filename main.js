let fullScreen = false;
let bullet;
let v1;
let framerate = 60; // Useful for calculating the bullet lifespan in seconds
let bullets = new Array();
let player;
let aimVector;

function setup() {
    createCanvas(displayWidth, displayHeight);
    // translate(displayWidth/2, displayHeight/2)
    // angleMode(DEGREES);
    frameRate(framerate);
    player = new Player(createVector(30, 30));
    aimVector = createVector(0, 0);
}


function draw() {
    noStroke();
    background(220);

    player.update()

    for(let b=0; b < bullets.length; b++) {
        if (bullets[b].getDist() >= bullets[b].maxDistance) {
            bullets.splice(b, 1);
        } else {
            bullets[b].update()
        }
        
        
        
    }

    aimVector.set(mouseX - player.pos.x, mouseY - player.pos.y).normalize();
}

function mouseReleased() {
    // if (!fullscreen()) {
    //     fullscreen(true);
    // }

    bullets.push(new Bullet(null, player.pos, aimVector, 500));
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