class CoffeeMachine {
	constructor(power) {
       this.__power = power;
       this.__waterAmount = 0;
       this.__WATER_HEAT_CAPACITY = 4200; 
	}

	getTimeToBoil() {
		return this.__waterAmount * this.__WATER_HEAT_CAPACITY * 80 / this.__power;
	}

	run() {
		setTimeout(() => { console.log( 'Кофе готов!' ) }, this.getTimeToBoil() );
	}

	setWaterAmount(amount) {
		this.__waterAmount = amount;
	}
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();