import * as THREE from "three";
import { addAnimation } from "../../index";

function lesson1rotatingCube() {
  const scene = new THREE.Scene();
  const fov = 75;
  const colors = ['red', 'purple', 'green', 'yellow', 'white', 'teal', 'blue', 'brown', 'chocolate', 'coral', 'burlywood'];
  const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, .1, 1000);
  const geometry = new THREE.BoxGeometry(1, 1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: getColor() });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  let cameraX = 0, cameraY = 0, cameraZ = 10;
  camera.position.set(cameraX, cameraY, cameraZ);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  addAnimation(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();


  function getColor() {
    return colors[getRandom(colors.length)];
  }

  function getRandom(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const ADJUSTMENT_UNIT = 0.25;
  document.addEventListener('keydown', event => {
   if(event.key.startsWith('Arrow')) {
     if (event.key === 'ArrowRight') {
       cameraX += ADJUSTMENT_UNIT;
     } else if (event.key === 'ArrowLeft') {
       cameraX -= ADJUSTMENT_UNIT;
     } else if (event.key === 'ArrowUp') {
       cameraY += ADJUSTMENT_UNIT;
     } else if (event.key === 'ArrowDown') {
       cameraY -= ADJUSTMENT_UNIT;
     }
     camera.position.set(cameraX, cameraY, cameraZ);
     camera.updateProjectionMatrix();
   }
  });

  document.addEventListener('click', (event) => {
    cube.material = new THREE.MeshBasicMaterial({ color: getColor() });
  });

  document.addEventListener('wheel', (event) => {
    if (event.deltaY >= 0) {
      cameraZ += ADJUSTMENT_UNIT;
    } else {
      cameraZ -= ADJUSTMENT_UNIT;
    }
    camera.position.set(cameraX, cameraY, cameraZ);
    camera.updateProjectionMatrix();
  });
}

export default lesson1rotatingCube;