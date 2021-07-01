import { AnimationMixer } from "three";

function setupModel(model, clip) {
  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);

  action.play();

  model.tick = delta => mixer.update(delta);
  return model;
}

export { setupModel };