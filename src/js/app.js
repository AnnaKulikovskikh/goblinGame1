import Timer  from './timer';
import Game  from './game';

const holes = [...document.getElementsByClassName('hole')];

let next = setInterval(() => Timer() ,1000);

for (let i = 0; i < holes.length; i++){
  holes[i].onclick = Game;
}
