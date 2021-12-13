class Game {
    constructor(game){

        this.game = game;


        this.gameActive = false;
        this.gameEnd = false;
        // this.bullets = new Array(); // contains bullets for both enemy and player
        this.enemies = new Array();
        this.levels = 0;


        
        this.player = new Player(createVector(70, displayHeight/2), this.bullets);

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
        this.game = new Game(game);
    }

    level() {
        if(this.levels >= 0){
            for( let i=0; i < 2; i++) {
                this.enemies.push(new Enemy(null,
                    createVector(
                        round(random(displayWidth)), 
                        round(random(displayHeight))
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

            if(this.levels >= 2){
                for( let i=0;i < this.levels*2; i++) {
                    this.enemies.push(new Enemy(null,
                        createVector(
                            random(displayWidth),
                            random(displayHeight)
                        ),
                        this.player
                    ));
                    
                }
            }
            if(this.levels == 5){
                for( let i=0;i < 30; i++) {
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
        background("black");
        textFont(font);
        textSize(200);
        fill("red");
        textAlign(CENTER);
        text("YOU DIED",displayWidth/2,displayHeight/2);
    }
    gameWin() {
        background("green");
        textFont(font);
        textSize(100);
        fill("black");
        textAlign(CENTER);
        text("Congratulations!",displayWidth/2,displayHeight/2);
    }
    drawPlayerHealth() {
        push();
        for(let i = 0; i<this.player.health; i++) {
            image(healthSprite, 30, 20)
            translate(45,0);

        }
        pop();
        // textFont(font);
        // textSize(18);
        // fill("black");
        // text(this.player.health, 30, 30)
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
                background(backgroundSprite)
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
                            bullets.splice(b, 1);
                        }

                        for (let e = 0; e < this.enemies.length; e++) {
                            if (bullets[b].hits(this.enemies[e].pos) && bullets[b].playerOwned) {
                                this.enemies[e].health--;
                                bullets.splice(b, 1);
                            }
                            
                        }
                    }
                }
        
                for (let i=0; i < this.enemies.length; i++) {
                    
                    if (this.enemies[i].health <= 0) {
                        this.enemies.splice(i, 1)
                        
                    } else {
                        this.enemies[i].update();
                    }
                    


                }
                if ( this.enemies.length == 0 && this.player.pos.x >  displayWidth - 50) {
                    this.levels += 1;
                    this.player.pos.x = 70;
                    this.player.pos.y = displayHeight/2;
                    this.level();
                }
                if (this.levels == 6){
                    this.gameWin();
                    this.gameEnd = true;
                }
                if (this.player.health <= 0) {
                    this.gameOver();
                    this.gameEnd = true;
                }
                
            }  

        }
    }
}