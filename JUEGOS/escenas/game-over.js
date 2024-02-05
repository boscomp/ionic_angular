import {RestartButton} from '../componentes/restart-button'

export class Gameover extends Phaser.Scene {

    constructor() {
        super({ key: 'gameover' });
        this.restartButton = new RestartButton(this);

    }

    preload() {
        this.load.image('gameover', 'images/juanjomareao.png', { frameWidth: 190, frameHeight: 49 });
        //Precargamos el componente restartbutton:
        this.restartButton.preload();
        //Load audio de final de partida:
        this.load.audio('gameoversample', 'audios/gameover.mp3');
    }

    create() {
        this.add.image(410,250, 'background'); //No necesita precarga, ya estaba precargada en la escena game.js
        this.restartButton.create();
        this.gameoverImage = this.add.image(400,300, 'gameover');
        //Añadimos el audio a la escena:
        this.gameOverSample = this.sound.add('gameoversample');
        //Reproducimos:
        this.gameOverSample.play();
    }
}