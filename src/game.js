import stages from './stages.js';
import Stage from './stage.js';
import Network from './network.js';
import { ENABLE_NETWORK } from './constants.js'

export default class Game {
    constructor({ input, view }) {
        this.input = input;
        this.view = view;
        this.stages = stages;
        this.player1 = null;
        this.player2 = null;
        this.stage = null;
        this.stageIndex = 0;
        this.frames = 0;
        this.lastFrame = 0;
        this.network = ENABLE_NETWORK ? new Network() : null;

        this.loop = this.loop.bind(this);
        this.onGameOver = this.onGameOver.bind(this);
    }

    async init() {
        await this.view.init();
        if (ENABLE_NETWORK) {
            await this.network.init();
        }
    }

    start() {
        this.stage = new Stage(stages[this.stageIndex], this.network);
        this.stage.number = this.stageIndex + 1;
        this.stage.on('gameOver', this.onGameOver);

        requestAnimationFrame(this.loop);
    }

    loop(currentFrame) {
        const frameDelta = currentFrame - this.lastFrame;

        this.stage.update(this.input, frameDelta);
        this.view.update(this.stage, this.player1, this.player2);
        this.frames = 0;

        this.lastFrame = currentFrame;

        requestAnimationFrame(this.loop);
    }

    onGameOver() {
        // show game over screen
        console.log('GAME OVER');
    }
}