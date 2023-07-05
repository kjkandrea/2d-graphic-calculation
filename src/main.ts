import './style.css';

const canvas = document.getElementById('graphic-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const { height } = canvas;

// 이 코드가 왜 필요한지 아직 이해하지 못함
ctx.translate(0, height);
ctx.scale(-1, 1);
