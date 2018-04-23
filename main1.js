
console.log("Example with literal object");

// Define a car object using plain literal object.
// We define 2 properties (brand, speed) and
// 3 methods (accelerate, brake, describe)

var car = {

	// properties
	brand: "Ford",
	speed: 0,

	// methods:

	accelerate: function(amount) {
		this.speed += amount;
	},

	brake: function(amount) {
		this.speed -= amount;
	},

	status: function() {
		return this.brand + " running at " + this.speed + " km/h";
	}
};


// Try methods

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());


// But now if we want another car we need to repeat the code...
// That's unnecessary repetition.
// https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

var car2 = {

	brand: "Ferrari",
	speed: 0,

	accelerate: function(inc) {
		this.speed += inc;
	},

	brake: function(dec) {
		this.speed -= dec;
	},

	status: function() {
		return this.brand + " running at " + this.speed + " km/h";
	}
};

car2.accelerate(200);
console.log(car2.status());
car2.brake(100);
console.log(car2.status());


// See main2.js for a solution (define a function)


