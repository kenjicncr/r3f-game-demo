import { SpriteProps } from './@core/Sprite';

const spriteData: { [index: string]: SpriteProps } = {
    ui: {
        src: './assets/ui.png',
        sheet: {
            'self-select': [
                [4, 0],
                [5, 0],
            ],
            select: [[4, 0]],
            dot: [[1, 0]],
            solid: [[0, 1]],
        },
    },
    player: {
        src: './assets/dps-spritesheet.png',
        frameWidth: 64,
        frameHeight: 64,
        frameTime: 300,
        sheet: {
            default: [[0, 0]],
            walkDown: [
                [0, 3],
                [1, 3],
                [2, 3],
                [3, 3],
            ],
            walkUp: [
                [0, 2],
                [1, 2],
                [2, 2],
                [3, 2],
            ],
            walkLeft: [
                [0, 1],
                [1, 1],
                [2, 1],
                [3, 1],
            ],
            walkRight: [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0],
            ],
            action: [
                [0, 1],
                [2, 1],
            ],
        },
    },
    objects: {
        src: './assets/objects.png',
        frameWidth: 20,
        frameHeight: 20,
        sheet: {
            floor: [[0, 0]],
            wall: [[1, 0]],
            'workstation-1': [[0, 1]],
            'workstation-2': [[1, 1]],
            'coffee-machine': [[2, 1]],
            'coffee-machine-empty': [[3, 1]],
            pizza: [[4, 1]],
            plant: [[0, 2]],
        },
    },
    footstep: {
        src: './assets/footstep.png',
        sheet: {
            default: [
                [0, 0],
                [2, 0],
            ],
        },
        opacity: 0.75,
        frameTime: 150,
    },
};

export default spriteData;
