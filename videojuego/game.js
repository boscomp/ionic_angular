import { Scoreboard } from "./componentes/Scoreboard.js";

export class Game extends Phaser.Scene {
    constructor() 
    {super({key: 'game'})
}
init(){
    this.scoreboard= new Scoreboard(this)
}
preload(){
    this.load.image('background', 'images/background.png');
    this.load.image('gameover', 'images/gameover.png');
    this.load.image('platform', 'images/platform.png');
    this.load.image('ball', 'images/ball.png');
    this.load.image('bluebrick', 'images/brickBlue.png');
    this.load.image('blackbrick', 'images/brickBlack.png');
    this.load.image('greenbrick', 'images/brickGreen.png');
    this.load.image('orangebrick', 'images/brickOrange.png');
}

create() {

    this.add.image(400, 250, 'background');
    this.gameoverImage=this.add.image(400,90,'gameover');
    this.gameoverImage.visible = false;

    //Añadimos texto de marcador:
    this.scoreboard.create();
    this.bricks = this.physics.add.staticGroup({
        key: ['bluebrick', 'orangebrick', 'greenbrick', 'blackbrick'],
        frameQuantity: 10,
        gridAlign: {
            width: 10,
            height: 4,
            cellWidth: 67,
            cellHeight:34,
            x: 112,
            y: 100
        }
    })
    


    this.platform = this.physics.add.image(400, 460, 'platform').setImmovable();
    this.platform.body.allowGravity= false

    this.ball = this.physics.add.image(385, 430, 'ball');
    this.ball.setData('glue', true);
    this.ball.setCollideWorldBounds(true);

//colisión plataforma-bola
    this.physics.add.collider(this.ball, this.platform, this.platformImpact, null, this);
    //colisión bricks-bola
    this.physics.add.collider(this.ball, this.bricks, this.brickImpact, null, this);

    this.ball.setBounce(1);

    this.cursors = this.input.keyboard.createCursorKeys();

  
}


update() {
    if (this.cursors.left.isDown) {
        this.platform.setVelocityX(-500);
        if (this.ball.getData('glue')) {

            this.ball.setVelocityX(-500);
        }
    }
    else if (this.cursors.right.isDown) {
        this.platform.setVelocityX(500);
        if (this.ball.getData('glue')) {
            
            this.ball.setVelocityX(500);
        }
    }
    else {
        this.platform.setVelocityX(0);
        if (this.ball.getData('glue')) {
            
            this.ball.setVelocityX(0);
        }
    }
    if (this.ball.y >500) {
        this.gameoverImage.visible = true;
        this.scene.pause();
    }
    if (this.cursors.up.isDown) {
        this.ball.setVelocity(-75, -300);
        this.ball.setData('glue',false)
    }
}

ejecutar () {
    console.log("ha chocado");
    this.ball.setVelocity(10, -800);
}

platformImpact(ball, platform) {
   this.scoreboard.incrementPoints(1);
   let relativeImpact = ball.x - platform.x;

   if (relativeImpact<0.1 && relativeImpact>0.1) {
    ball.setVelocityX(Phaser.Math.Between(-10, 10))
   } else {
    ball.setVelocityX(10 * relativeImpact);
   }
    
}

brickImpact(ball, brick){
    brick.disableBody(true, true);
    //aumentar marcador:
    this.scoreboard.incrementPoints(10);
}
}