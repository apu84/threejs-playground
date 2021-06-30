import World from "./world/World";
import './styles/index.less';

function main(container) {
  const world = new World(container);
  world.start();
}

main(document.getElementById('scene-container'));