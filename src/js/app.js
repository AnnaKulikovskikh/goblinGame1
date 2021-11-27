import Timer from './timer';
import Game from './game';

const holes = [...document.getElementsByClassName('hole')];

setInterval(() => Timer(), 1000);

for (let i = 0; i < holes.length; i += 1) {
  holes[i].onclick = Game;
}
