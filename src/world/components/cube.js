import { createMaterial } from "./material";
import { createBox } from "./geometry";
import { MathUtils, Mesh } from "three";

function createCube() {
  const material = createMaterial();
  const geometry = createBox();

  const cube = new Mesh(geometry, material);
  cube.position.set(0, 0, 0);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = delta => {
    cube.rotation.z += delta * radiansPerSecond;
    cube.rotation.y += delta * radiansPerSecond;
    cube.rotation.x += delta * radiansPerSecond;
  };

  cube.updateTexture = (image) => {
    material.updateTexture(image);
  }

  return cube;
}

export { createCube };