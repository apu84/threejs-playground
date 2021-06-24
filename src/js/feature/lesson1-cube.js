import * as THREE from "three";

function lesson1rotatingCube () {
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

  document.addEventListener('wheel', (event) => {
    if (event.deltaY >= 0) {
      if(fov + 1 <= 180) {
        fov += 1
      }
    }
    else {
      if(fov + 1 >= 0) {
        fov -= 1;
      }
    }
    camera.fov = fov;
    camera.updateProjectionMatrix();
  });
}

export default lesson1rotatingCube;