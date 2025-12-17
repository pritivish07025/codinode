const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tree parameters
let branchLength = 140;
let depthLimit = 12;

function drawBranch(startX, startY, len, angle, depth) {
  if (depth === 0) return;

  const endX = startX + len * Math.cos(angle);
  const endY = startY + len * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = `hsl(${depth * 20}, 70%, 60%)`;
  ctx.lineWidth = depth;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Smooth animation
  setTimeout(() => {
    drawBranch(endX, endY, len * 0.75, angle - Math.PI / 6, depth - 1);
    drawBranch(endX, endY, len * 0.75, angle + Math.PI / 6, depth - 1);
  }, 100);
}

function drawTree() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBranch(canvas.width / 2, canvas.height, branchLength, -Math.PI / 2, depthLimit);
}

// On resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawTree();
});

drawTree();
