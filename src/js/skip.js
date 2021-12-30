import gameOver from './gameOver';
import change from './change';

// const holes = [...document.getElementsByClassName('hole')];

export default function skip() {
  document.getElementById('lost').textContent = Number(document.getElementById('lost').textContent) + 1;
  if (Number(document.getElementById('lost').textContent) === 6) {
    alert('Надо больше тренироваться...');
    gameOver();
  }
  change();
}
