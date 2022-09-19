import { ACTION_TYPES, Key, Direction } from './constants.js';

export default class Input {
    constructor() {
        this.keys = new Set();
        this.init();
    }

    init() {
        document.addEventListener('keydown', event => {
            switch (event.code) {
                case Key.PLAYER1_UP:
                case Key.PLAYER1_LEFT:
                case Key.PLAYER1_DOWN:
                case Key.PLAYER1_RIGHT:
                case Key.PLAYER1_FIRE:
                case 'Enter':
                case Key.PLAYER2_UP:
                case Key.PLAYER2_LEFT:
                case Key.PLAYER2_DOWN:
                case Key.PLAYER2_RIGHT:
                case Key.PLAYER2_FIRE:
                    event.preventDefault();
                    this.keys.add(event.code);
            }
        });

        document.addEventListener('keyup', event => {
            switch (event.code) {
                case Key.PLAYER1_UP:
                case Key.PLAYER1_LEFT:
                case Key.PLAYER1_DOWN:
                case Key.PLAYER1_RIGHT:
                case Key.PLAYER1_FIRE:
                case 'Enter':
                case Key.PLAYER2_UP:
                case Key.PLAYER2_LEFT:
                case Key.PLAYER2_DOWN:
                case Key.PLAYER2_RIGHT:
                case Key.PLAYER2_FIRE:
                    event.preventDefault();
                    this.keys.delete(event.code);
            }
        });
    }

    has(...arg) {
        return Array.isArray(arg) ?
            arg.some(key => this.keys.has(key)) :
            this.keys.has(arg);
    }

    getAction(controlKeys) {
        if (this.has(...controlKeys.movement)) {
            let direction = null;
            if (this.has(Key.PLAYER1_UP) || this.has(Key.PLAYER2_UP)) {
                direction = Direction.UP;
            } else if (this.has(Key.PLAYER1_RIGHT) || this.has(Key.PLAYER2_RIGHT)) {
                direction = Direction.RIGHT;
            } else if (this.has(Key.PLAYER1_DOWN) || this.has(Key.PLAYER2_DOWN)) {
                direction = Direction.DOWN;
            } else if (this.has(Key.PLAYER1_LEFT) || this.has(Key.PLAYER2_LEFT)) {
                direction = Direction.LEFT;
            }
            return {
                type: ACTION_TYPES.MOVEMENT,
                data: direction
            }
        }
        if (this.has(...controlKeys.fire)) {
            return {
                type: ACTION_TYPES.FIRE,
                data: null
            }
        }
    }

    static getPlayer1Controls() {
        return {
            movement: [
                Key.PLAYER1_UP,
                Key.PLAYER1_RIGHT,
                Key.PLAYER1_DOWN,
                Key.PLAYER1_LEFT,
            ],
            fire: [
                Key.PLAYER1_FIRE,
            ]
        }
    }

    static getPlayer2Controls() {
        return {
            movement: [
                Key.PLAYER2_UP,
                Key.PLAYER2_RIGHT,
                Key.PLAYER2_DOWN,
                Key.PLAYER2_LEFT,
            ],
            fire: [
                Key.PLAYER2_FIRE,
            ]
        }
    }

    static getNoControls() {
        return {
            movement: [],
            fire: []
        }
    }
}