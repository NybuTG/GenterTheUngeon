class Enemy {
    constructor(sprite, pos, player) {
        this.sprite = sprite;
        this.pos = pos;
        this.playerDir = createVector(0, 0);
        this.player = player;
        this.speed = 2;
           
        this.cooldown = 1000;
        this.lastShot = 0;

        this.maxRange = random(200, 300);

        this.health = 2;
        
        this.walking = false;
        this.shootingSpeed = 650
    }

    update() {

        this.playerDir.set(this.player.pos.x - this.pos.x, 
                         this.player.pos.y - this.pos.y).normalize();

        let distanceToPlayer = dist(this.player.pos.x, this.player.pos.y, this.pos.x, this.pos.y)

        if (distanceToPlayer > 500) {

            this.speed = distanceToPlayer / 125;
            
            let move = this.playerDir.copy().mult(this.speed);
            this.pos.add(move);

            this.walking = true;
        } else if (distanceToPlayer < this.maxRange) {

            this.speed = -(distanceToPlayer / 125);
            let move = this.playerDir.copy().mult(this.speed);
            this.pos.add(move);

            this.walking = true;
        } else {

            this.walking = false;

            if (this.lastShot >= this.shootingSpeed) {
                this.shoot()
                this.lastShot = 0;
            } else {
                this.lastShot += deltaTime;
            }
        }
        


        fill('blue');

        if (this.walking) {
            let current = this.sprite[animFrame % 6]
            image(current, this.pos.x, this.pos.y, current.width / 4, current.height / 4)
        } else {
            let current = this.sprite[1]
            image(current, this.pos.x, this.pos.y, current.width / 4, current.height / 4)
        }
    }
    

    shoot() {
        bullets.push(new Bullet(null, this.pos, this.playerDir, 500, false));
    }
}

class ShotgunEnemy extends Enemy {
    constructor(sprite, pos, player) {
        super(sprite, pos, player);
    }

    shoot() {
        for (let i=-3; i < 5; i++) {
            console.log("shotgun pew pew")
            // 0 * something = 0, add small marging to get 3 bullets
            bullets.push(new Bullet(null, this.pos, this.playerDir.copy().rotate(i * 0.125 + 0.01), 500, false));
        }
    }
}

class BossEnemy extends Enemy {

    constructor(sprite, pos, player) {
        super(sprite, pos, player);
        this.health = 15;
        this.shootingSpeed = 1000;
    }

    shoot() {
        for (let i=0; i < 50; i++) {
            console.log("shotgun pew pew")
            // 0 * something = 0, add small marging to get 3 bullets
            bullets.push(new Bullet(null, this.pos, this.playerDir.copy().rotate(i * 0.125 + 0.01), 500, false));
        }
    }

}
