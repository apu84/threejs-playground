import {
  TextureLoader,
  RepeatWrapping,
  sRGBEncoding,
  MeshLambertMaterial,
  Mesh,
  PlaneGeometry
} from "three";

function createGround() {
  const textureLoader = new TextureLoader();
  const groundTexture = textureLoader.load('assets/textures/terrain/grasslight-big.jpg');
  groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(25, 25);
  groundTexture.anisotropy = 16;
  groundTexture.encoding = sRGBEncoding;

  const groundMaterial = new MeshLambertMaterial({ map: groundTexture});
  const geometry = new PlaneGeometry(20000, 20000);
  const mesh = new Mesh(geometry, groundMaterial);
  mesh.position.y = - 250;
  mesh.rotation.x = - Math.PI / 2;
  mesh.receiveShadow = true;

  mesh.tick = delta => {
  };
  return mesh;
}

export { createGround };
