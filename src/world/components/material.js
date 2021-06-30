import { MeshStandardMaterial, TextureLoader } from "three";
import wood from "../../assets/textures/wood-591631_640.jpg";

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(wood);

  const material = new MeshStandardMaterial({
    map: texture
  });

  material.updateTexture = (image) => {
    material.map = textureLoader.load(image);
  }

  return material;
}

export { createMaterial };