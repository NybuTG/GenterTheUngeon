class Player {
    constructor(pos) {
        // Copy is required to avoid it accidentally updating the parent (Can be quite bad)
        this.pos = pos.copy();
        
        // Movement speed
        // TODO: Update to vector
        this.speed = 4;

        // Hold the players shot bullets
        this.bullets = new Array();

        // Aiming
        // The aim vector is a vector between ((-1, 1), (-1, 1)). It is made from a radius around the player
        this.aimVector = createVector(0, 0);

        // Weapon system
        this.weapons = ["pistol", "rifle"];
        this.selected = this.weapons[1];
    }

    update() {
        // Check for keypresses
        this.eventCheck();

        // Placeholder character, lookin' shiny
        fill('red');
        circle(this.pos.x, this.pos.y, 30);

        // Update the aim vector
        this.aimVector.set(mouseX - player.pos.x, mouseY - player.pos.y).normalize();    
    }

    eventCheck() {
        // W & S
        if (keyIsDown(87)) {
            this.pos.y -= this.speed;
        } else if (keyIsDown(83)) {
            this.pos.y += this.speed;
        }

        // A & D
        if (keyIsDown(65)) {
            this.pos.x -= this.speed;
        } else if (keyIsDown(68)) {
            this.pos.x += this.speed;
        }
    }

    shootBullet() {
        bullets.push(new Bullet(null, this.pos, this.aimVector, 500));
    }
}