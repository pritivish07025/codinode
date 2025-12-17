
const puzzle = document.getElementById('puzzle');
let pieces = ['A','B','C','D','E','F','G','H','I'];
pieces.sort(()=>Math.random()-0.5);

pieces.forEach(p=>{
  const div = document.createElement('div');
  div.classList.add('piece');
  div.draggable = true;
  div.innerText = p;
  puzzle.appendChild(div);
});

let dragged = null;
document.addEventListener('dragstart', e=> { dragged = e.target; });
document.addEventListener('dragover', e=> e.preventDefault());
document.addEventListener('drop', e=>{
  if(e.target.classList.contains('piece')){
    let temp = e.target.innerText;
    e.target.innerText = dragged.innerText;
    dragged.innerText = temp;
    checkPuzzle();
  }
});

function checkPuzzle(){
  const current = Array.from(document.querySelectorAll('.piece')).map(p=>p.innerText).join('');
  if(current === pieces.join('')) alert("🎉 Puzzle Solved! 🎉");
}
