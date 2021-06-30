import { MeshBasicMaterial, MeshStandardMaterial } from "three";

function createMaterial() {
  return new MeshStandardMaterial({
    'color': 'red'
  });
}

export { createMaterial };