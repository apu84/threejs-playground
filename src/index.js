import Router from "./js/router";
import lesson1rotatingCube from "./js/feature/lesson1-cube";
import lesson2drawLine from "./js/feature/lesson2-line";

const navigation = document.getElementById('navigation');
navigation.appendChild(buildNavigationLink('/#/lesson1', 'Lesson 1 - Rotating Cube'));
navigation.appendChild(buildNavigationLink('/#/lesson2', 'Lesson 2 - Draw Line'));

const router = new Router();
router.add('/lesson1', (req) => lesson1rotatingCube());
router.add('/lesson2', () => lesson2drawLine());
router.reload();

function buildNavigationLink(href, text) {
  const lesson = document.createElement('a');
  lesson.setAttribute("href", href);
  lesson.innerText = text;
  return lesson;
}

export function addAnimation(domElement) {
 const root = document.getElementById("root");
 root.replaceChild(domElement, root.firstChild);
}