import { createScene } from "./components/scence";
import { createCamera } from "./components/camera";
import { createRenderer } from "./systems/renderer";
import { resizer } from "./systems/resizer";
import { createCube } from "./components/cube";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Loop } from "./systems/Loop";

let scene, camera, renderer, loop;

class World {
  constructor(container) {
    scene = createScene();

    const cube = createCube();
    scene.add(cube);

    let cameraObj = createCamera();
    camera = cameraObj.camera;

    renderer = createRenderer();
    new OrbitControls(camera, renderer.domElement);

    container.append(renderer.domElement);

    const { resize } = resizer(container, () => {
      resize(cameraObj, renderer);
      this.render();
    });
    resize(cameraObj, renderer);

    loop = new Loop(renderer.setAnimationLoop, () => this.render());
    loop.addComponent(cube);
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

export default World;