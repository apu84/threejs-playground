import { Color, Scene, Fog } from 'three';

function createScene(backgroundColor = 0xcce0ff) {
  const scene = new Scene();
  scene.background = new Color(backgroundColor);
  scene.fog = new Fog( 0xcce0ff, 500, 10000 );
  return scene;
}

export { createScene };