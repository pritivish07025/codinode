const container = document.getElementById("puzzle");

const rows = 4;
const cols = 4;
const pieceSize = 100;
let delay = 0;

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.top = `${y * pieceSize}px`;
    piece.style.left = `${x * pieceSize}px`;


    piece.style.backgroundPosition = `-${x * pieceSize}px -${y * pieceSize}px`;

    container.appendChild(piece);

    
    setTimeout(() => {
      piece.classList.add("show");
    }, delay);

    delay += 200; 
  }
}
