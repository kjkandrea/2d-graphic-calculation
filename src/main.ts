import './style.css';

// canvas...
const canvas = document.getElementById('graphic-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const grid = 25;

ctx.scale(grid, grid);

const width = canvas.width / grid; // 20
const height = canvas.height / grid; // 20

ctx.lineWidth = ctx.lineWidth / grid;
ctx.strokeStyle = 'rgb(0, 0, 0)';

// user event listen...
const drawButton = document.getElementById('draw-button') as HTMLButtonElement;
const eraseButton = document.getElementById('erase-button') as HTMLButtonElement;
const yInput = document.getElementById('y') as HTMLInputElement;

drawButton.addEventListener('click', () => {
  const y = Number(yInput.value);

  if (Number.isNaN(y)) {
    alert('y value must be ean integer');
    return;
  }

  const MIN = 0;
  if (y < MIN || y > height) {
    alert(`y value must be between ${MIN} and ${height}`);
    return;
  }

  draw_straight_line_conner_to_y(y);

  yInput.value = '';
});
eraseButton.addEventListener('click', () => {
  clear();
  draw_grid();
});

draw_grid();
// draw_straight_line();

// draw...
function draw_grid() {
  clear();
  ctx.save();
  draw_lines();

  function draw_lines() {
    ctx.setLineDash([0.1, 0.1]); // 파선
    ctx.strokeStyle = 'rgb(128, 128, 128)'; // 회색
    ctx.beginPath();

    // 수평선
    for (let i = 1; i < height; i += 1) {
      ctx.moveTo(0, i);
      ctx.lineTo(height, i);
    }

    // 수직선
    for (let i = 1; i < width; i += 1) {
      ctx.moveTo(i, 0);
      ctx.lineTo(i, width);
    }

    ctx.stroke();
    ctx.restore();
  }
}

function draw_straight_line_conner_to_y(y: number) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.setLineDash([0.2, 0.2]);
  ctx.lineTo(width, y);
  ctx.stroke();

  const slope = y / width;
  ctx.fillStyle = 'rgb(0, 0, 0)';

  for (let x = 0; x <= width; x += 1) {
    ctx.beginPath();
    ctx.arc(x, Math.round(x * slope), 0.15, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function draw_two_straight_line() {
  for (let i = 0; i <= width; i += 1) {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255, 255, 0)'; // 노랑
    ctx.arc(i, i, 0.25, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgb(255, 0, 0)'; // 빨강
    ctx.arc(i, 10, 0.25, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // w 직사각형 영역* h 의 픽셀을 모두 clear
}
