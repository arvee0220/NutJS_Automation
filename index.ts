import { keyboard, mouse, Key, screen, left, Point } from "@nut-tree-fork/nut-js";

const intervalArray = [
    Math.ceil(Math.random() * 120000),    
    Math.floor(Math.random() * 30000),    
];

const RANDOM_INTERVAL = intervalArray[Math.floor(Math.random() * intervalArray.length)];
const RANDOM_INTERVAL2 = Math.ceil(Math.random() * 120000);

async function automateKeyAndMouseMovement() {
    const random = Math.random() * 1000;
    const random2 = Math.random() * 1000;
    const randomx = Math.ceil(random);
    const randomy = Math.ceil(random2);

    keyboard.config.autoDelayMs = 200;

    await keyboard.pressKey(Key.LeftControl);
    await keyboard.pressKey(Key.LeftShift);
    await keyboard.pressKey(Key.Tab);
    await keyboard.releaseKey(Key.Tab);
    await keyboard.releaseKey(Key.LeftControl);
    await keyboard.releaseKey(Key.LeftShift);

    // await keyboard.pressKey(Key.LeftSuper);

    // await keyboard.pressKey(Key.Down);
    // await keyboard.releaseKey(Key.Down);

    // await keyboard.pressKey(Key.Up);
    // await keyboard.releaseKey(Key.Up);

    // await keyboard.releaseKey(Key.LeftSuper);

    await keyboard.pressKey(Key.LeftAlt);
    await keyboard.pressKey(Key.Tab);
    await keyboard.releaseKey(Key.Tab);
    await keyboard.releaseKey(Key.LeftAlt);

    await keyboard.pressKey(Key.LeftAlt);
    await keyboard.pressKey(Key.Tab);
    await keyboard.releaseKey(Key.Tab);
    await keyboard.releaseKey(Key.LeftAlt);

    await mouse.move([new Point(randomx, randomy)]);
}

async function automateMouseMovement() {
    const random = Math.random() * 1000;
    const random2 = Math.random() * 1000;
    const randomx = Math.ceil(random);
    const randomy = Math.ceil(random2);

    const currentPosition = await mouse.getPosition();

    await mouse.move([new Point(currentPosition.x + randomx, currentPosition.y + randomy)]);
}

setInterval(() => {
    automateKeyAndMouseMovement().catch((e) => console.log(e));
}, RANDOM_INTERVAL);

setInterval(() => {
    automateMouseMovement().catch((e) => console.log(e));
}, RANDOM_INTERVAL2);
