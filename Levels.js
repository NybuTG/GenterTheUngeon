class Game {
    constructor(){
        this.GameActive = false;
        this.GameEnd = null;
        this.bullets = new Array(); // contains bullets for both enemy and player
        this.player; // Player Object 
        this.game;
        this.enemies = new Array();

    }
    Setup() {
        this.game = createCanvas(displayWidth,displayHeight);
        player = new Player(createVector(30, 30));

        for( let i=0; i < 10; 1++) {
            enemies.push(new Enemy(null,createVector(random(displayWidth))))
        }
    }

    Startscreen() {
        push();
        background(220);
        textFont("Comic Sans MS");
        textSize(15);
        textAlign(CENTER,TOP);
        fill("White");
        text("");
        pop();
    }

    Draw() {
        if (!this.GameActive) {
            this.Startscreen();
        }
        else {
            // Blit screen
            background(220);
            
            // Update the player
            player.update()
            
            // Loop through bullets, delete bullet if it has exceeded or is equal to it's maximum distance; otherwise update it
            for(let b=0; b < bullets.length; b++) {
                if (bullets[b].getDist() >= bullets[b].maxDistance) {
                    bullets.splice(b, 1);
                } else {
                    bullets[b].update()
                }
            }
        
            for (let i=0; i < enemies.length; i++) {
                enemies[i].update(enemies);
            }
        }  

    }
}