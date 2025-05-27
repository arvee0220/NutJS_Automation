import { keyboard, mouse, Key, Point } from "@nut-tree-fork/nut-js";
import { getRandomFromArray } from "./helper.ts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

    await sleep(3000);

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

async function runKeyAndMouseLoop() {
    try {
        await automateKeyAndMouseMovement();
    } catch (e) {
        console.error("Key and mouse error:", e);
    }
    const nextDelay = getRandomFromArray([Math.ceil(Math.random() * 2000), Math.floor(Math.random() * 2000), 2000, 10000]);
    setTimeout(runKeyAndMouseLoop, nextDelay);
}

async function runMouseOnlyLoop() {
    try {
        await automateMouseMovement();
    } catch (e) {
        console.error("Mouse movement error:", e);
    }
    const nextDelay = Math.ceil(Math.random() * 120000); // Up to 2 minutes
    setTimeout(runMouseOnlyLoop, nextDelay);
}

runKeyAndMouseLoop();
runMouseOnlyLoop()
