import { BoxBufferGeometry } from "three";

function createBox(width = 2, height = 2, depth = 2) {
  return new BoxBufferGeometry(width, height, depth);
}

export { createBox };