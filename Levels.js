class Game {
    constructor(game){

        this.game = game;


        this.gameActive = false;
        this.gameEnd = false;
        // this.bullets = new Array(); // contains bullets for both enemy and player
        this.enemies = new Array();
        this.levels = 0;


        
        this.player = new Player(createVector(30, displayHeight/2), this.bullets);

        // for( let i=0; i < 10; i++) {
        //     this.enemies.push(new Enemy(null,
        //         createVector(
        //             random(displayWidth), 
        //             random(displayHeight)
        //         ),
        //         this.player
        //         ));
        // }
    }

    startscreen() {
        push();
        background(220);
        textFont(titleFont);
        textSize(46);
        textAlign(CENTER,TOP);
        fill("black");
        text("Welcome to Gungeons and Dragguns. To start press any key.\n To move around use the WASD keys.\n To shoot press the left mouse button.\n To dodge use the right mouse button."
        ,displayWidth/2,displayHeight/2);
        pop();
    }

    new() {
        this.gameEnd = false;
        this.gameActive = true;
        this.enemies = new Array();
        
    }

    level() {
        if(this.levels == 0){
            for( let i=0; i < 10; i++) {
                this.enemies.push(new Enemy(null,
                    createVector(
                        random(displayWidth), 
                        random(displayHeight)
                    ),
                    this.player
                    ));
            }
            if(this.levels >= 1){
                for( let i=0;i < 5; i++) {
                    this.enemies.push(new Enemy(null,
                        createVector(
                            random(displayWidth),
                            random(displayHeight)
                        ),
                        this.player
                        ));
                }
            }
        }
    }

    gameOver() {
        background("red");
        textFont(font);
        textSize(displayHeight/2);
        text("YOU DIED",displayWidth/2,displayHeight/2);
    }
    drawPlayerHealth() {
        textFont(font);
        textSize(18);
        fill("black");
        text(this.player.health, 30, 30)
    }
    draw() {
        if (!this.gameActive) {
            this.startscreen();
        }
        
        else {
            if(this.gameEnd){
                this.gameOver();
            }
            else {
                // Blit screen
                background(220);
                this.level();
                // Update the player
                this.player.update()

                // Draw health
                this.drawPlayerHealth();

                // Loop through bullets, delete bullet if it has exceeded or is equal to it's maximum distance; otherwise update it
                for(let b=0; b < bullets.length; b++) {
                    if (bullets[b].getDist() >= bullets[b].maxDistance) {
                        bullets.splice(b, 1);
                    } else {
                        bullets[b].update()
                        if (bullets[b].hits(this.player.pos) && !bullets[b].playerOwned) {
                            this.player.health--;
                        }
                    }
                }
        
                for (let i=0; i < enemies.length; i++) {
                    this.enemies[i].update();
                }
                if ( enemies.length == 0 && this.player.pos.x == displayWidth-30 && this.player.pos.y == displayHeight/2) {
                    this.levels += 1;
                    this.player.pos.x == 30;
                    this.player.pos.y == displayHeight/2;
                }
            }  

        }
    }
}