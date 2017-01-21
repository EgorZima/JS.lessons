class Clock {
  constructor() {}

  render() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    console.log( h,m,s );
  }

  start() {
    let timerId;
    this.render();
    var self = this;

    timerId = setInterval(() => { this.render() }, 1000)};
}

var watch = new Clock();
watch.start();
