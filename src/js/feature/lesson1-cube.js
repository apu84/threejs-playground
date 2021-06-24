import * as THREE from "three";

function lesson1rotatingCube() {
  const scene = new THREE.Scene();
  let fov = 75;
  const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, .1, 1000);
  const geometry = new THREE.BoxGeometry(1, 1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 'red' });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();

  const colors = ['red', 'purple', 'green', 'yellow', 'white', 'teal', 'blue', 'brown', 'chocolate', 'coral', 'burlywood'];

  function getColor() {
    return colors[getRandom(colors.length)];
  }

  function getRandom(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  document.addEventListener('click', (event) => {
    cube.material = new THREE.MeshBasicMaterial({ color: getColor() });
  });

  document.addEventListener('wheel', (event) => {
    if (event.deltaY >= 0) {
      if (fov + 1 <= 180) {
        fov += 1
      }
    } else {
      if (fov + 1 >= 0) {
        fov -= 1;
      }
    }
    camera.fov = fov;
    camera.updateProjectionMatrix();
  });
}

export default lesson1rotatingCube;