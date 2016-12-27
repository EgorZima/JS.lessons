function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  
  var timerId;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };
  
  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };
  
  function onReady() {
      alert( 'Кофе готов!' );
    }

  this.run = function() {
    timerId = setTimeout(function() {
      timerId = null;
      onReady();
    }, getTimeToBoil());
  };

  this.isRunning = function() {
    return !!timerId;
  }



}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});