const app = document.querySelector<HTMLDivElement>("#app");

let frame = 0;

function update() {
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
    </main>
  `;
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
