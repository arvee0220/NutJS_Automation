import { keyboard, mouse, Key, screen, left, Point } from "@nut-tree-fork/nut-js";

async function automateKeyAndMouseMovement() {
    const random = Math.random() * 1000;
    const random2 = Math.random() * 1000;
    const randomx = Math.ceil(random);
    const randomy = Math.ceil(random2);

    keyboard.config.autoDelayMs = 100;

    await keyboard.pressKey(Key.LeftControl);
    await keyboard.pressKey(Key.LeftShift);
    await keyboard.pressKey(Key.Tab);
    await keyboard.releaseKey(Key.Tab);
    await keyboard.releaseKey(Key.LeftControl);
    await keyboard.releaseKey(Key.LeftShift);

    await keyboard.pressKey(Key.LeftSuper);

    await keyboard.pressKey(Key.Down);
    await keyboard.releaseKey(Key.Down);

    await keyboard.pressKey(Key.Up);
    await keyboard.releaseKey(Key.Up);

    await keyboard.releaseKey(Key.LeftSuper);

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
}, 4000);

setInterval(() => {
    automateMouseMovement().catch((e) => console.log(e));
}, 6000);
