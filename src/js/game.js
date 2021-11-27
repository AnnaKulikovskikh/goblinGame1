import gameOver  from './gameOver';

const holes = document.querySelectorAll('.hole')
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

export default function game(){
  document.getElementById('lost').textContent = Number(document.getElementById('lost').textContent) - 1;
  let kill = this.classList.contains('hole_has-mole');
  if(kill){
    dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }
  if (dead.textContent == "10"){
    alert('Ура, вы победили!');
    gameOver();
  }
  if (lost.textContent == "5"){
    alert('Надо больше тренироваться...');
    gameOver();
  }
  change();
}

