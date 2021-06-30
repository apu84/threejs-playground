function resizer(container, onResize) {
  const resize = (camera, renderer) => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.setAspectRatio(w, h);
    renderer.resize(w, h, window.devicePixelRatio);
  };

  window.addEventListener('resize', () => {
    onResize();
  });

  return { resize };
}

export { resizer }