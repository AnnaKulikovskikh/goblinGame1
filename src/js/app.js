import Game from './game';
import Timer from './timer';

const holes = [...document.getElementsByClassName('hole')];

Timer.start();

for (let i = 0; i < holes.length; i += 1) {
  holes[i].onclick = Game;
}
