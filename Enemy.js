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
        
        
    }

    update() {

        this.playerDir.set(this.player.pos.x - this.pos.x, 
                         this.player.pos.y - this.pos.y).normalize();

        let distanceToPlayer = dist(this.player.pos.x, this.player.pos.y, this.pos.x, this.pos.y)

        if (distanceToPlayer > 500) {

            this.speed = distanceToPlayer / 125;
            
            let move = this.playerDir.copy().mult(this.speed);
            this.pos.add(move);
        } else if (distanceToPlayer < this.maxRange) {

            this.speed = -(distanceToPlayer / 125);
            let move = this.playerDir.copy().mult(this.speed);
            this.pos.add(move);

        } else {

            if (this.lastShot >= 650) {
                this.shoot()
                this.lastShot = 0;
            } else {
                this.lastShot += deltaTime;
            }
        }
        


        fill('blue');
        circle(this.pos.x, this.pos.y, 30);
    }
    

    shoot() {
        bullets.push(new Bullet(null, this.pos, this.playerDir, 500, false));
    }
}
