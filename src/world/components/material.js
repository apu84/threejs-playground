import { MeshBasicMaterial } from "three";

function createMaterial() {
  return new MeshBasicMaterial({
    'color': 'red'
  });
}

export { createMaterial };