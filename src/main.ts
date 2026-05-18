const app = document.querySelector<HTMLDivElement>("#app");

let frame = 0;
let lastTime = performance.now();
let elapsedSeconds = 0;

function update(currentTime: number) {
  const deltaSeconds = (currentTime - lastTime) / 1000;

  lastTime = currentTime;
  elapsedSeconds += deltaSeconds;
  frame += 1;
}

function render() {
  if (!app) {
    return;
  }

  app.innerHTML = `
    <main>
      <h1>Baokemeng Demo</h1>
      <p>Game loop frame: ${frame}</p>
      <p>Elapsed time: ${elapsedSeconds.toFixed(2)}s</p>
    </main>
  `;
}

function gameLoop(currentTime: number) {
  update(currentTime);
  render();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
