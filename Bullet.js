class Bullet {
    constructor(sprite, pos) {
        this.sprite = sprite;
        this.pos = pos;
    }

    update() {
        
    }

    draw() {
        fill("green");
        circle(this.pos.x, this.pos.y, 20);
    }
}