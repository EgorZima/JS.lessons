Array.prototype.reverses = function() {
	let i,
	    j;
    
    for (i = 0, j = this.length - 1; i < j; i++, j--) {
		let current = this[i];

		this[i] = this[j];
		this[j] = current;
	}

	return this;
}

let a = [1,2,3,4,5];

console.log( a.reverses() );
