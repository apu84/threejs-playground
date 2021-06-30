import { createScene } from "./components/scence";
import { createCamera } from "./components/camera";
import { createRenderer } from "./systems/renderer";
import { resizer } from "./systems/resizer";
import { createCube } from "./components/cube";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Loop } from "./systems/Loop";
import { createLights } from "./components/lights";

import wall from "../assets/textures/wall-1087955_640.jpg";
import wood from "../assets/textures/wood-591631_640.jpg";
import lumber from "../assets/textures/lumber-84678_640.jpg";
import brick from "../assets/textures/brickwall-21534_640.jpg";

import { TextureLoader } from "three";

let scene, camera, renderer, loop;

class World {
  constructor(container) {
    scene = createScene();

    const lights = createLights();

    const cube = createCube();
    scene.add(cube, lights);

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

    const addButton = (image, index) => {
      const body = container.parentElement;
      const button = document.createElement('button');
      button.style.zIndex = '1';
      button.style.width = '25px';
      button.style.height = '15px';
      button.style.position = 'absolute';
      button.style.bottom = '10px';
      const positionX = 50 - (index * 3);
      button.style.right = `${positionX}%`;
      button.style.background = 'url(' + image + ') no-repeat';
      button.addEventListener('click', () => {
        cube.updateTexture(image);
      });
      body.appendChild(button);
    }

    addButton(wood, 0);
    addButton(wall, 1);
    addButton(lumber, 2);
    addButton(brick, 3);
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