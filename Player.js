class Player {
    constructor(pos) {
        this.pos = pos.copy();
        this.speed = 4;
    }

    update() {
        this.eventCheck();
        fill('red');
        circle(this.pos.x, this.pos.y, 30);
    }

    eventCheck() {
        // W & S
        if (keyIsDown(87)) {
            this.pos.y -= this.speed;
        } else if (keyIsDown(83)) {
            this.pos.y += this.speed;
        }

        if (keyIsDown(65)) {
            this.pos.x -= this.speed;
        } else if (keyIsDown(68)) {
            this.pos.x += this.speed;
        }


    }

    // draw() {

    // }
}