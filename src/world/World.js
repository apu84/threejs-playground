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
import { loadBirds } from "./components/brids/birds";

let scene, camera, renderer, loop;

class World {
  constructor(container) {
    scene = createScene();

    const lights = createLights();

    const cube = createCube();
    scene.add(cube, lights);

    camera = createCamera();

    renderer = createRenderer();
    new OrbitControls(camera, renderer.domElement);

    container.append(renderer.domElement);

    const { resize } = resizer(container, () => {
      resize(camera, renderer);
      this.render();
    });
    resize(camera, renderer);

    loop = new Loop(renderer.setAnimationLoop, () => this.render());
    loop.addComponent(cube);

    const addButton = (image, index) => {
      const body = container.parentElement;
      const button = document.createElement('button');
      button.className = 'texture';
      const positionX = 60 - (index * 10);
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

    const addPlayButton = () => {
      const body = container.parentElement;
      const button = document.createElement('button');
      button.className = 'play';
      let isPlaying = true, icon = 'pause';
      button.innerHTML = `<i class="fa fa-${icon}"></i>`;

      button.addEventListener('click', () => {
        if (isPlaying) {
          icon = 'play';
          this.stop();
        } else {
          icon = 'pause';
          this.start();
        }
        isPlaying = !isPlaying;
        button.innerHTML = `<i class="fa fa-${icon}"></i>`;
      });
      body.appendChild(button);
    }

    addPlayButton();
  }

  async init() {
    const { parrot, flamingo } = await loadBirds();
    scene.add(parrot, flamingo);
    loop.addComponent(parrot);
    loop.addComponent(flamingo);
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