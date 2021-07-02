import World from "./world/World";
import World2 from "./world/World2";
import './styles/index.less';

async function main(container) {
  const world = new World2(container);
  await world.init();
  world.start();
}

main(document.getElementById('scene-container'))
    .catch(error => console.error(error));
