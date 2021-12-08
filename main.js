let fullScreen = false;
let bullets = new Array(); // Contains both player and enemy bullets
let player; // Player object
let canvas;
let game;
let titleFont;
let font;
let shotgunSound;
let pistolSound;


// Disable right click menu
document.addEventListener('contextmenu', event => event.preventDefault());

function preload() {
    titleFont = loadFont("assets/alagard.ttf");
    font = loadFont("assets/windows_command_prompt.ttf");

    shotgunSound = loadSound("assets/shotgun.wav")
    pistolSound = loadSound("assets/pistol.wav")
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    game = new Game(game);

    noStroke();    
       
}

function draw() {
    game.draw();
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

    if (game.gameEnd) {
        game.new();
    }

    if (!fullscreen()) { 
        fullscreen(true); 
    } 
}
