import { Scoreboard } from "../componentes/Scoreboard.js";


export class Game extends Phaser.Scene {
    constructor() {
        super({ key: 'game' });
    }

    // Inicializamos marcador:
    init() {
        this.scoreboard = new Scoreboard(this)
    }

// REMOVE.BG/ES
    preload() {
        this.load.image('background', 'images/backvillamarin.jpg');
        this.load.image('platform', 'images/juanmiplatform.png');
        this.load.image('ball', 'images/balon.png');
        this.load.image('bluebrick', 'images/porteria.png');
        this.load.image('blackbrick', 'images/brickBlack.png');
        this.load.image('greenbrick', 'images/brickGreen.png');
        this.load.image('orangebrick', 'images/brickOrange.png');
        this.load.audio('gamesample', 'audios/sevillaconfiesa.mp3');

    }

    create() {

        //Seteamos el sistema físico de bordes de rebote:
        this.physics.world.setBoundsCollision(true, true, true, false);
        

         //Añadimos el audio a la escena:
         this.gameSample = this.sound.add('gamesample');
         
         //Reproducimos:
         this.gameSample.play();
        this.add.image(400, 250, 'background');



        // Llamamos al método que coloca el marcador:
        this.scoreboard.create();

        // Colocamos los grupos de bricks:
        this.bricks = this.physics.add.staticGroup({
            key: ['bluebrick'],
            frameQuantity: 10,
            gridAlign: {
                width: 10,
                height: 4,
                cellWidth: 67,
                cellHeight: 34,
                x: 112,
                y: 100
            }
        });


        this.platform = this.physics.add.image(400, 460, 'platform').setImmovable();
        this.platform.body.allowGravity = false

        this.ball = this.physics.add.image(385, 430, 'ball');
        this.ball.setData('glue', true);
        this.ball.setCollideWorldBounds(true);

        //Añadimos colisión bola contra plataforma:
        this.physics.add.collider(this.ball, this.platform, this.paltformImpact, null, this);
        //Añadimos grupo de ladrillos del grupo brick la bola:
        this.physics.add.collider(this.ball, this.bricks, this.brickImpact, null, this);



        //Programamos el rebote
        this.ball.setBounce(1.0);

        //Control de la escucha de los cursores:
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    // Método que se llama cuando se ejecuta una colisión entre la bola y la plataforma:
    paltformImpact(ball, platform) {
    
        // Conseguimos la posición relativa de la colisión entre la bola y la plataforma:
        let relativeImpact = ball.x - platform.x;
        console.log(relativeImpact);


        //Ajustamos la velocidad:
        if (relativeImpact < 0.1 && relativeImpact > -0.1) {
            ball.setVelocityX(Phaser.Math.Between(-10, 10))
        } else {
            ball.setVelocityX(10 * relativeImpact);
        }

    }


    //Método que se llama cuando se ejecuta una colisión entre la bola y los ladrillos:
    brickImpact(ball, brick) {
        //Eliminamos brick:
        brick.disableBody(true, true);
        //Aumentamos marcador:
        this.scoreboard.incrementPoints(10);
        //Comprobamos si el número de elementos de ladrillos ha llegado a cero:
        if (this.bricks.countActive() === 0) {
            this.showCongratulations()
        }

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

        //Control de fin de partida al escaparse la bola por la pantalla de abajo:
        //500 es la altura de nuestra pantalla configurada en el archivo index.js
        if (this.ball.y > 500) {
            this.showGameOver()
            this.gameSample.pause();
        }

        if (this.cursors.up.isDown) {
            this.ball.setVelocity(-75, -300);
            this.ball.setData('glue', false)
        }

    }

    //Cambio de escena cuando se pierde la partida:
    showGameOver() {
        this.scene.start('gameover');
    }

    //Cambio de escena cuando se rompen todos los bricks:
    showCongratulations() {
        this.scene.start('congratulations');
    }
    
}