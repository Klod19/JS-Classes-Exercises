
console.log("Example with class");

// Instead of a function that creates a car,
// we define a class Car

// A class looks much cleaner, and has many other advantages.

class Car {

	// The constructor initializes the properties.
	// It gets called when we do: new Car(some_brand)
	constructor(brand, model) {
		this.brand = brand;
        this.model = model;
		this.speed = 0;
        this.motion ="The car is not moving (initial condition) "
	}

	// methods:

	// (notice that now we don't say "function" and that we
	//  don't put a comma after closing brace of the function)

    check_motion()  {
        (this.speed > 0) ? this.motion = "The car is moving" : this.motion = "The car has stopped"

    }
    
	accelerate(amount) {
		this.speed += amount;
        this.check_motion()
	}

	brake(amount) {
//        if (amount >= this.speed){
//            this.speed = 0;
//        }
//        
//        else {this.speed -= amount;}
		
// the following ternary conditional has the same meaning as the if-else statement above
        (amount >= this.speed) ? this.speed = 0 : this.speed -= amount
        this.check_motion();
	}
    
    emergency_brake() {
        this.speed = 0;
        this.check_motion()
    }
    
	status() {
		return this.brand + " " +  this.model +  " running at " + this.speed + " km/h;" + " status check: " + this.motion;
	}
}


// Now we use create a Car object using the class

var car = new Car("Ford", "Fiesta");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(20);
console.log(car.status());
car.brake(200);
console.log(car.status());


// We may create other cars easily

var car2 = new Car("Ferrari", "Whatever Model");
console.log(car2.status());
car2.accelerate(200);
console.log(car2.status());
car2.brake(100);
console.log(car2.status());
car2.emergency_brake();
console.log(car2.status());

var car3 = new Car ("Seat", "Marbella")
console.log(car3.status());
car3.accelerate(400);
console.log(car3.status());
car3.brake(200);
console.log(car3.status());
console.log("TELEVISION CODE")
class Tv {
    constructor (brand, model) {
        this.brand = brand;
        this.model = model;
        this.volume = 50;
        this.channel = 1;
        this.mirror_volume = this.volume;
        this.mirror_channel = this.channel;
    }
    
    // to reset should I use "get"? or "static"?
    
//    get volume(){
//        
//    }
    
//    static getInitialVolume(television){
//        television.volume = this.volume
//    }
//    
//    static getIntialChannel(televison){
//        return televison.channel;
//    }
    

    reset(){
        this.volume = this.mirror_volume;
        this.channel = this.mirror_channel;
    
    }
    
    increase_volume(amount) {
        this.volume += amount;
        (this.volume > 100) ? this.volume = 100 : this.volume = this.volume;
    }
    
    decrease_volume(amount) {
        this.volume -= amount;
        (this.volume < 0) ? this.volume = 0 : this.volume = this.volume;
    }
    
    set_channel(number) {
        (number > 50 || number <=0) ? this.channel = this.channel : this.channel = number;
    }
    
    status() {
        return this.brand + " " + this.model + " " + " at channel " + this.channel + " and volume " +  this.volume
    }
}


var tv1 = new Tv ("Panasonic", "R2");
console.log("initial status: " + tv1.status());
tv1.increase_volume(40);
console.log(tv1.status());
tv1.decrease_volume(400);
console.log(tv1.status());
tv1.increase_volume(80);
console.log(tv1.status());
tv1.increase_volume(300);
console.log(tv1.status());
tv1.decrease_volume(8);
console.log(tv1.status());
tv1.set_channel(25);
console.log(tv1.status());
tv1.set_channel(51);
console.log(tv1.status());
tv1.set_channel(0);
console.log(tv1.status());
tv1.set_channel(30);
console.log(tv1.status());
//console.log(Tv.constructor.brand); this is undefined; how can i access the values stored in "constructor"?
tv1.reset();
console.log(tv1.status());



