import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { setupModel } from "./setupModel";

async function loadBirds() {
  const loader = new GLTFLoader();
  const [parrotJson, flamingoJson] = await Promise.all([
    loader.loadAsync('assets/model/Parrot.glb'),
    loader.loadAsync('assets/model/Flamingo.glb')
  ]);
  const parrot = setupModel(parrotJson.scene.children[0], parrotJson.animations[0]);
  parrot.position.set(50, 0, -80);

  const flamingo = setupModel(flamingoJson.scene.children[0], flamingoJson.animations[0]);
  flamingo.position.set(-120, 0, -190);

  return {
    parrot,
    flamingo
  };
}

export { loadBirds }