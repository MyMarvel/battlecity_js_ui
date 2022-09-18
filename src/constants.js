export const NUMBER_OF_UNITS = 13;
export const TILE_SIZE = 16;
export const UNIT_SIZE = 32;
export const STAGE_SIZE = NUMBER_OF_UNITS * UNIT_SIZE;

export const Key = {
    UP: 'ArrowUp',
    RIGHT: 'ArrowRight',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    SPACE: 'Space'
};

export const Direction = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
};

export const TerrainType = {
    BASE: 0,
    BRICK_WALL: 1,
    STEEL_WALL: 2,
    TREE: 3,
    WATER: 4,
    ICE: 5
};

export const BASE_POSITION = [6 * UNIT_SIZE, 12 * UNIT_SIZE];
export const BASE_WIDTH = UNIT_SIZE;
export const BASE_HEIGHT = UNIT_SIZE;
export const BASE_SPRITES = [
    [11 * UNIT_SIZE, 7.5 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [12 * UNIT_SIZE, 7.5 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const BRICK_WALL_SPRITES = [
    [8 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // full
    [9 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // top 8/16
    [10 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // right 8/16
    [11 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // bottom 8/16
    [12 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // left 8/16
    [8 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // 1/4
    [8.5 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top left 3/4
    [9 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top right 3/4
    [9.5 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom right 3/4
    [10 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom left 3/4
    [12 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top 2/4
    [11.5 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // right 2/4
    [11 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom 2/4
    [10.5 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // left 2/4
    [12.5 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top left 1/4
    [13 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top right 1/4
    [13.5 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom right 1/4
    [14 * UNIT_SIZE, 4 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom left 1/4
];
export const BRICK_WALL_SPRITE_MAP = {
    '0': 5,
    '1': 10,
    '2': 11,
    '4': 12,
    '8': 13
};

export const BULLET_WIDTH = 8;
export const BULLET_HEIGHT = 8;
export const BULLET_SPEED = 4;
export const BULLET_SPRITES = [
    [16 * UNIT_SIZE, 0 * UNIT_SIZE, BULLET_WIDTH, BULLET_HEIGHT],
    [16.5 * UNIT_SIZE, 0 * UNIT_SIZE, BULLET_WIDTH, BULLET_HEIGHT],
    [17 * UNIT_SIZE, 0 * UNIT_SIZE, BULLET_WIDTH, BULLET_HEIGHT],
    [17.5 * UNIT_SIZE, 0 * UNIT_SIZE, BULLET_WIDTH, BULLET_HEIGHT]
];

export const BULLET_EXPLOSION_WIDTH = UNIT_SIZE;
export const BULLET_EXPLOSION_HEIGHT = UNIT_SIZE;
export const BULLET_EXPLOSION_ANIMATION_SPEED = 50;
export const BULLET_EXPLOSION_SPRITES = [
    [16 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [17 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [18 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const ENEMY_TANK_SPEED = 1;
export const ENEMY_TANK_TURN_TIMER_THRESHOLD = 200;
export const ENEMY_TANK_START_POSITIONS = [
    [6 * UNIT_SIZE, 0],
    [0 * UNIT_SIZE, 0],
    [12 * UNIT_SIZE, 0],
];
export const ENEMY_TANK_SPRITES = [
    [
        [0 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [1 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [2 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [3 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [4 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [5 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [6 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
        [7 * UNIT_SIZE, 4 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
    ]
];

export const PLAYER1_TANK_POSITION = [4 * UNIT_SIZE, 12 * UNIT_SIZE];
export const PLAYER1_TANK_SPRITES = [
    [0 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [1 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [2 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [3 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [4 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [5 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [6 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [7 * UNIT_SIZE, 0 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const TANK_WIDTH = UNIT_SIZE;
export const TANK_HEIGHT = UNIT_SIZE;
export const TANK_SPEED = 2;
export const TANK_TURN_THRESHOLD = TILE_SIZE * 0.5;
export const TANK_ANIMATION_FRAME = 20;

export const TANK_EXPLOSION_ANIMATION_SPEED = 100;
export const TANK_EXPLOSION_SPRITES = [
    [16 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [17 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [18 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE],
    [19 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE * 2, UNIT_SIZE * 2],
    [21 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE * 2, UNIT_SIZE * 2],
    [16 * UNIT_SIZE, 2 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]
];

export const STEEL_WALL_SPRITES = [
    [8 * UNIT_SIZE, 6.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // 1/4
    [8 * UNIT_SIZE, 6.5 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // full
    [9 * UNIT_SIZE, 6.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // top
    [10 * UNIT_SIZE, 6.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // right
    [11 * UNIT_SIZE, 6.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // bottom
    [12 * UNIT_SIZE, 6.5 * UNIT_SIZE, TILE_SIZE, TILE_SIZE] // left
];

export const STAGE_NUMBER_SPRITES = [
    [23.5 * UNIT_SIZE, 11.5 * UNIT_SIZE, UNIT_SIZE, UNIT_SIZE], // flag
    [19 * UNIT_SIZE, 5.25 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // stage number
];

export const PLAYER1_LIVES_SPRITES = [
    [23.5 * UNIT_SIZE, 8.5 * UNIT_SIZE, UNIT_SIZE, TILE_SIZE], // 1P
    [23.5 * UNIT_SIZE, 9 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // tank icon
    [19.5 * UNIT_SIZE, 5.25 * UNIT_SIZE, TILE_SIZE, TILE_SIZE], // number
];

export const ENEMY_TANK_ICONS_SPRITES = [
    [18 * UNIT_SIZE, 5.5 * UNIT_SIZE, TILE_SIZE, UNIT_SIZE],
];

export const STOMP_CREDENTIALS = {
    user: 'test',
    pass: 'test',
    url: 'ws://127.0.0.1:15674/ws',
}

export const RABBITMQ_CHANNELS = {
    tank1: '/topic/tank1',
    tank2: '/topic/tank2',
}