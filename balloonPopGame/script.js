
let score = 0;
const scoreDisplay = document.getElementById('score');

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.background = `hsl(${Math.random()*360},80%,60%)`;
  balloon.style.left = Math.random() * (window.innerWidth - 50) + 'px';
  balloon.innerText = '';
  balloon.style.animationDuration = (3 + Math.random()*3)+'s';
  document.body.appendChild(balloon);
  balloon.addEventListener('click', () => {
    balloon.classList.add('pop');
    score += 1;
    scoreDisplay.innerText = 'Score: ' + score;
    setTimeout(()=> balloon.remove(),400);
  });
  balloon.addEventListener('animationend', () => balloon.remove());
}

setInterval(createBalloon, 500);