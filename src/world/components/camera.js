import { PerspectiveCamera } from "three";

function createCamera(fov = 75, aspectRatio = 1, near = .1, far = 500, positionZ = 10) {
  const camera = new PerspectiveCamera(fov, aspectRatio, near, far);
  camera.position.set(0, 0, positionZ);

  camera.setAspectRatio = (width, height) => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  return camera;
}

export { createCamera };