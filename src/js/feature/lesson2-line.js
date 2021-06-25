import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { addAnimation } from "../../index";

let renderer, scene, camera;

function lesson2drawLine() {
  init();
  animate();
}

function init() {
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );
  addAnimation(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.set( - 0, 0, 40 );

  new OrbitControls( camera, renderer.domElement );

  const curve = new THREE.LineCurve(
      new THREE.Vector3( -20, 0, 10 ),
      new THREE.Vector3( 30, 5, 5 ));

  const points = curve.getPoints( );
  const geometry = new THREE.BufferGeometry().setFromPoints( points );
  const material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

  const line = new THREE.Line( geometry, material );
  scene.add(line);

  window.addEventListener( 'resize', onWindowResize );
  onWindowResize();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
export default lesson2drawLine;
