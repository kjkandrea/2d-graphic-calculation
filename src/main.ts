import './style.css';

const canvas = document.getElementById('graphic-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

(function 격자그리기() {
  const grid = 25;

  ctx.scale(grid, grid);

  const width = canvas.width / grid; // 20
  const height = canvas.height / grid; // 20

  ctx.lineWidth = ctx.lineWidth / grid;
  ctx.strokeStyle = 'rgb(0, 0, 0)';

  clear();
  ctx.save();
  draw_grid();

  function draw_grid() {
    console.log('draw_grid');
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
})();

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // w 직사각형 영역* h 의 픽셀을 모두 clear
}
