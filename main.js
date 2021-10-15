let fullScreen = false;
let bullets = new Array(); // Contains both player and enemy bullets
let player; // Player object
let game;

function setup() {
    game = createCanvas(displayWidth, displayHeight);
    player = new Player(createVector(30, 30));
    aimVector = createVector(0, 0);
    noStroke();    
}

function draw() {
    // Blit screen
    background(220);

    // Update the player
    player.update()

    // Loop through bullets, delete bullet if it has exceeded or is equal to it's maximum distance; otherwise update it
    for(let b=0; b < bullets.length; b++) {
        if (bullets[b].getDist() >= bullets[b].maxDistance) {
            bullets.splice(b, 1);
        } else {
            bullets[b].update()
        }
    }
}

function mousePressed() {
    if (player.selected === "rifle") {
        player.shootBullet();
    }
}

function mouseReleased() {
    
    if (player.selected === "pistol") {
        player.shootBullet();
    }

    if (!fullscreen()) {
        fullscreen(true);
    }
}

function keyReleased() {
    if (!fullscreen()) {
        fullscreen(true);
    }
}