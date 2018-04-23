
console.log("Example with literal object created in function");

// To avoid repeating code, we could create the car from a function.
// We just use the brand that comes from the parameter.

function createCar(brand) {

	var car = {

		// properties
		brand: brand, // We use the function parameter
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

	return car;
}


// Now we use the function to create a Car

var car = createCar("Ford");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());


// We could now create another car easily

var car2 = createCar("Ferrari");
car2.accelerate(200);
console.log(car2.status());
car2.brake(100);
console.log(car2.status());

var car3 = createCar("Trabant");
car3.accelerate(400);
console.log(car3.status());
car3.brake(200);
console.log(car3.status());

// This approach may work in some situations, but there is
// a much better solution: declare a class.


// See main3.js for a better solution (define a class)


