let fullScreen = false;
let bullets = new Array(); // Contains both player and enemy bullets
let player; // Player object
let canvas;
let enemies = new Array();
let game;
let titleFont;
let font;

// Disable right click menu
document.addEventListener('contextmenu', event => event.preventDefault());

function preload() {
    titleFont = loadFont("assets/alagard.ttf");
    font = loadFont("assets/windows_command_prompt.ttf");
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    game = new Game(game);

    // player = new Player(createVector(30, 30));

    for (let i=0; i < 10; i++) {
        enemies.push(new Enemy(null, createVector(random(displayWidth), random(displayHeight)), player, i));
    }

    noStroke();    
       
}

function draw() {
    game.draw();
    // // Blit screen
    // background(220);

    // // Update the player
    // player.update()

    // // Loop through bullets, delete bullet if it has exceeded or is equal to it's maximum distance; otherwise update it
    // for(let b=0; b < bullets.length; b++) {
    //     if (bullets[b].getDist() >= bullets[b].maxDistance) {
    //         bullets.splice(b, 1);
    //     } else {
    //         bullets[b].update()
    //     }
    // }

    // for (let i=0; i < enemies.length; i++) {
    //     enemies[i].update(enemies);
    // }
}

function mousePressed(event) {
    if (event.button === 0) {
        game.player.shootBullet();
    }

    if (event.button === 2 && game.player.hasCooldown === false) {
        game.player.dash = true;
    }
}

function mouseReleased() { 
    if (!fullscreen()) { 
        fullscreen(true); 
    } 
} 
function keyTyped() {
    if (!game.gameActive) {
        game.gameActive = true;
    }

    if (!fullscreen()) { 
        fullscreen(true); 
    } 
}
