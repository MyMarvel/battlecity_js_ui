import { Key, Direction, PLAYER1_TANK_POSITION, PLAYER1_TANK_SPRITES, TANK_SPEED, ACTION_TYPES } from './constants.js';
import Tank from './tank.js';

export default class PlayerTank extends Tank {
    constructor(args) {
        super(args);

        this.direction = Direction.UP;
        this.speed = TANK_SPEED;
        this.controlKeys = args;
    }

    update({ input, frameDelta, world }) {
        const action = input.getAction(this.controlKeys);
        if (action?.type == ACTION_TYPES.MOVEMENT) {
            const direction = action.data;
            const axis = Tank.getAxisForDirection(direction);
            const value = Tank.getValueForDirection(direction);

            this.turn(direction);
            this.move(axis, value);
            this.animate(frameDelta);

            const isOutOfBounds = world.isOutOfBounds(this);
            const hasCollision = world.hasCollision(this);

            if (isOutOfBounds || hasCollision) {
                this.move(axis, -value);
            } else {
                this.emit('moved', this);
            }
        }

        if (action?.type == ACTION_TYPES.FIRE) {
            this.fire();
        }
    }
}