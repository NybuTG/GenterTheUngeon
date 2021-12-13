let fullScreen = false;
let bullets = new Array(); // Contains both player and enemy bullets
let player; // Player object
let canvas;
let game;
let titleFont;
let font;
let shotgunSound;
let pistolSound;
let healthSprite;
let backgroundSprite

let bullet_sprites = new Array();
let player_sprites = new Array();
let shotgun_sprites = new Array();

let animFrame = 0;

// Disable right click menu
document.addEventListener('contextmenu', event => event.preventDefault());

function preload() {
    titleFont = loadFont("assets/alagard.ttf");
    font = loadFont("assets/windows_command_prompt.ttf");

    shotgunSound = loadSound("assets/shotgun.wav");
    pistolSound = loadSound("assets/pistol.wav");

    healthSprite = loadImage("assets/heart.png");
    backgroundSprite = loadImage("assets/background.png");

    // Load bullet enemy and player sprites (all 6 frames)
    for (let i=0; i < 6; i++) {
        bullet_sprites.push(loadImage("assets/bullet_enemy/bullet_" + i + ".png"));
        shotgun_sprites.push(loadImage("assets/shotgun_enemy/shotgun_" + i + ".png"));
        player_sprites.push(loadImage("assets/player/player_" + i + ".png"));
    }

    for (let i=0; i < 9; i++) {
        dash_sprites.push(loadImage("assets/player/dodge_" + i + ".png"));
    }
}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    game = new Game(game);

    noStroke();    
       
}

function draw() {
    // Slower animations
    if (frameCount % 10 == 0) {
        animFrame++;
    }

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
        setup();
      }
    

    if (!fullscreen()) { 
        fullscreen(true); 
    } 
}
