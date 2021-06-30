import { Clock } from "three";

const clock = new Clock();
class Loop {
  constructor(setAnimationLoop, onTick) {
    this.setAnimationLoop = setAnimationLoop;
    this.onTick = onTick;
    this.updateables = [];
  }

  addComponent(component) {
    this.updateables.push(component);
  }

  start() {
    this.setAnimationLoop(() => {
      this.tick();
      this.onTick();
    });
  }

  stop() {
    this.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();
    this.updateables.forEach(component => {
      component.tick(delta);
    });
  }
}

export { Loop };