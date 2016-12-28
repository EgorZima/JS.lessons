function CoffeeMachine(power) {
  this.__power = power;
  this.__waterAmount = 0;
  this.__WATER_HEAT_CAPACITY = 4200; 
}


CoffeeMachine.prototype.getTimeToBoil = function() {
   return this.__waterAmount * this.__WATER_HEAT_CAPACITY * 80 / this.__power;
}
CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
      console.log( 'Кофе готов!' );
    }, this.getTimeToBoil() );
  };

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this.__waterAmount = amount;
}


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();