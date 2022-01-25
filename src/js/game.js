export default class Game {
  constructor() {
    this.holes = [...document.getElementsByClassName('hole')];
    this.dead = document.getElementById('dead');
    this.lost = document.getElementById('lost');
  }

  init() {
    this.dead.textContent = 0;
    this.lost.textContent = 0;
    for (let i = 0; i < this.holes.length; i += 1) {
      this.holes[i].addEventListener('click', () => this.clicker(i));
    }
    this.timerId = setTimeout( () => this.skip(), 1000);
  }

  skip() {
    this.lost.textContent = Number(this.lost.textContent) + 1;
    if (Number(this.lost.textContent) === 6) {
      alert('Надо больше тренироваться...');
      this.gameOver();
    }
    this.change();
  }

  clicker(i) {
    clearTimeout(this.timerId);
    const kill = this.holes[i].classList.contains('hole_has-mole');
    if (kill) {
      this.dead.textContent = Number(this.dead.textContent) + 1;
    } else {
      this.lost.textContent = Number(this.lost.textContent) + 1;
    }
    if (this.dead.textContent === '10') {
      alert('Ура, вы победили!');
      this.gameOver();
    }
    if (this.lost.textContent === '5') {
      alert('Надо больше тренироваться...');
      this.gameOver();
    }
    this.change();
  }

  change() {
    let last = 50;
    for (let i = 0; i < this.holes.length; i += 1) {
      if (this.holes[i].classList.contains('hole_has-mole')) {
        this.holes[i].classList.remove('hole_has-mole');
        last = i;
      }
    }
    let rnd = last;
    while (rnd === last) {
      rnd = Math.floor(Math.random() * 16);
    }
    this.holes[rnd].classList.add('hole_has-mole');
    this.timerId = setTimeout( () => this.skip(), 1000);
  }

  gameOver() {
    clearTimeout(this.timerId);
    this.dead.textContent = 0;
    this.lost.textContent = 0;
  }
}
