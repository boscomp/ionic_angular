// Clase para llevar el marcador del juego:
export class Scoreboard {

    constructor(scene) {
        this.relatedScene = scene;
        this.score = 0;
    }

    // Método para crear nuestro marcador:
    create() {
        //Añadimos texto de marcador:
        this.scoreText = this.relatedScene.add.text(16, 16, 'PUNTOS: 0', {
            fontSize: '20px',
            fill: '#fff',
            fontFamily: 'verdana,arial,sans-serif'
        });
    }

    /**Método para incrementar puntos en el marcador:
     *parámetro: (points) puntos a incrementar. 
     ****/
    incrementPoints(points) {
        this.score += points;
        this.scoreText.setText('PUNTOS: ' + this.score);
    }

}