import { createScene } from "./components/scence";
import { createCamera } from "./components/camera";
import { createRenderer } from "./systems/renderer";
import { resizer } from "./systems/resizer";
import { Loop } from "./systems/Loop";
import { createLights } from "./components/lights";
import { createGround } from "./components/ground";
import { createControls } from "./components/controls";

let scene, camera, renderer, loop;

class World2 {
  constructor(container) {
    scene = createScene();
    camera = createCamera(40, 1, 1, 10000);

    renderer = createRenderer();
    createControls(camera, renderer.domElement);
    //move camera rotation after creating OrbitControl
    camera.position.set(1000, 50, 1500);

    container.append(renderer.domElement);

    const { resize } = resizer(container, () => {
      resize(camera, renderer);
      this.render();
    });

    loop = new Loop(renderer.setAnimationLoop, () => this.render());

    const { directionalLight, ambientLight } = createLights({ color: 0xdfebff, intensity: 1, x: 50, y: 200, z: 100 });
    scene.add(ambientLight);
    scene.add(directionalLight);
    const ground = createGround();
    scene.add(ground);

    loop.addComponent(ground);

    resize(camera, renderer);
  }

  async init() {

  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export default World2;
