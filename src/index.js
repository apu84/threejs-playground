import Router from "./js/router";
import lesson1rotatingCube from "./js/feature/lesson1-cube";

document.body.innerHTML =
    `<a href="/#/lesson1">Lesson 1 - Rotating Cube</a>`;

const router = new Router();
router.add('/lesson1', (req) => lesson1rotatingCube());
router.reload();


