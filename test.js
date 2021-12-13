let bullet_sprites = new Array();

function preload() {
    for (let i=0; i < 6; i++) {
        bullet_sprites.push(loadImage("assets/bullet_enemy/bullet_" + i + ".png"));
    }
    frameRate(7);
}

function setup() {
    createCanvas(800,600); 
}

function draw() {
    background(255);
    image(bullet_sprites[frameCount % 6], 0, 0);
}