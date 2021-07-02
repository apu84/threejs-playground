import { WebGLRenderer, sRGBEncoding } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer( {
    antialias: true
  });
  renderer.outputEncoding = sRGBEncoding;
  const render = (scene, camera) => {
    renderer.render(scene, camera);
  }

  const resize = (width, height, pixelRatio) => {
    renderer.setSize(width, height);
    renderer.setPixelRatio(pixelRatio);
  }

  return {
    domElement: renderer.domElement,
    render,
    resize,
    setAnimationLoop: renderer.setAnimationLoop
  };
}

export { createRenderer };
