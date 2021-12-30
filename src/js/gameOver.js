import Timer from './timer';

export default function gameOver() {
  Timer.stop();
  document.getElementById('dead').textContent = 0;
  document.getElementById('lost').textContent = 0;
}
