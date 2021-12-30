import Skip from './skip';

export default class Timer {
  constructor() {
    this.timerId
  }
  static start() {
    this.timerId = setTimeout(Skip, 1000);
    // this.timerId = setTimeout(function tick() {
    //   Skip();
    //   this.timerId = setTimeout(tick, 1000);
    // }, 1000);     
  }

  static stop() {
    clearTimeout(this.timerId);
  }
}
