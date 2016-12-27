function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}
function Fridge(power) {
	Machine.apply(this, arguments);

	var food = [];

	this.addFood = function(item) {
       if (this._enabled === false){
       	  return 'error fridge is disable';
       }
       if(food.length + arguments.length > this._power / 100) {
       	 return 'no free place';
       }
       for(var i = 0; i < arguments.length; i++) {
       	food.push(arguments[i]);
       }
	}
	this.getFood = function() {
		return food.slice();
	}
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье