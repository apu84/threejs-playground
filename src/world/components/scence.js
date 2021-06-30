import { Color, Scene } from 'three';

function createScene(backgroundColor = 'teal') {
  const scene = new Scene();
  scene.background = new Color(backgroundColor);
  return scene;
}

export { createScene };