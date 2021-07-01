import World from "./world/World";
import './styles/index.less';

async function main(container) {
  const world = new World(container);
  await world.init();
  world.start();
}

main(document.getElementById('scene-container'))
    .catch(error => console.error(error));