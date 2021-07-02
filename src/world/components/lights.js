import { AmbientLight, DirectionalLight } from "three";

function createLights({
                        color = 0xffffff,
                        intensity = 1,
                        x = -2,
                        y = -10,
                        z = 10
                      }) {
  const light = new DirectionalLight(color, intensity);
  light.position.set(x, y, z);
  light.position.multiplyScalar(1.3);
  return { directionalLight: light, ambientLight: new AmbientLight(0x666666) };
}

export { createLights }
