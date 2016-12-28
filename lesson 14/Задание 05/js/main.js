function Clock() {  };

Clock.prototype.__render = function render() {
  var date = new Date();

  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  console.log( h,m,s );
}

Clock.prototype.start = function() {
  var timerId;
  this.__render();
  var self = this;

  timerId = setInterval(function() {
     self.__render();
  }, 1000)

};


var watch = new Clock();
watch.start()