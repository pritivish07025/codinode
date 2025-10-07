
const game = document.getElementById('game');
const msg = document.getElementById('msg');
let cards = ['🍎','🍎','🍌','🍌','🍇','🍇','🍒','🍒','🥝','🥝','🍉','🍉','🍓','🍓','🍑','🍑'];
let firstCard=null, secondCard=null;
let score=0;

cards.sort(()=> Math.random()-0.5);

cards.forEach((emoji,index)=>{
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.emoji = emoji;
  card.innerText = '';
  game.appendChild(card);

  card.addEventListener('click',()=>{
    if(card.classList.contains('flipped') || secondCard) return;
    card.classList.add('flipped');
    card.innerText = emoji;

    if(!firstCard) { firstCard = card; }
    else {
      secondCard = card;
      if(firstCard.dataset.emoji === secondCard.dataset.emoji){
        score += 10;
        resetCards();
      } else {
        setTimeout(()=> {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          firstCard.innerText = '';
          secondCard.innerText = '';
          resetCards();
        },1000);
      }
    }
    msg.innerText = "Score: "+score;
  });
});

function resetCards(){
  firstCard=null;
  secondCard=null;
}