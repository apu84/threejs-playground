import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, domElement) {
  const controls = new OrbitControls( camera, domElement );
  controls.maxPolarAngle = Math.PI * 0.5;
  controls.minDistance = 1000;
  controls.maxDistance = 5000;
  return controls;

}

export { createControls };
