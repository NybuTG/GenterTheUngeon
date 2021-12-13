class Player {

    constructor(pos, bullets) {
        // Copy is required to avoid it accidentally updating the parent (Can be quite bad)
        this.pos = pos.copy();
        

        // Get bullets from the game class
        this.bullets = bullets;

        // Movement speed
        // TODO: Update to vector
        this.speed = 4;

        // Hold the players shot bullets
        this.bullets = new Array();

        // Aiming
        // The aim vector is a vector between ((-1, 1), (-1, 1)). It is made from a radius around the player
        this.aimVector = createVector(0, 0);



        // Dash system
        this.cooldown = 0;
        this.hasCooldown = false;
        this.dashtime = 0;
        this.dash = false;
        this.dashtimeAmount = 150;
        this.cooldownTime = 750;
        this.damageCooldown = 750;

        this.health = 6;

        // TODO: Change to sprite w&h
        this.bbox = [30, 60];
        
        this.lastShot = 0;

    }

    update() {
        // Check for keypresses
        this.eventCheck();

        // Placeholder character, lookin' shiny
        fill('red');
        rect(this.pos.x, this.pos.y, this.bbox[0], this.bbox[1]);

        // Update the aim vector
        this.aimVector.set(mouseX - this.pos.x, mouseY - this.pos.y).normalize();    

        if (this.dash === true) {
            this.damageCooldown = 500;
            this.speed = 10;
            this.dashtime += deltaTime;


            // Dash lasts 500ms
            if (this.dashtime >= this.dashtimeAmount) {
                // Reset and start cooldown
                this.dashtime = 0;
                this.hasCooldown = true;
                this.dash = false;
                this.speed = 4;
            }
        }

        if (this.hasCooldown === true) {
            this.cooldown += deltaTime;
            // Cooldown = 500ms
            if (this.cooldown >= this.cooldownTime) {

                // Make player ready to do dash again
                this.hasCooldown = false;
                this.cooldown = 0;
            }
        }

        if (this.damageCooldown > 0) {
            this.damageCooldown -= deltaTime;
        }

        if (this.damageCooldown < 0) {
            this.damageCooldown = 0;
        }
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
        // if (this.lastShot >= 650) {
            pistolSound.play();
            bullets.push(new Bullet(null, createVector(this.pos.x + 15, this.pos.y + 30), this.aimVector, 600));    
             this.lastShot = 0;
        // } else {
        //     this.lastShot += deltaTime;
        // }

    }
}
