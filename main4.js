
console.log("VARious things: let, toString, properties and references");

// Let's see a couple of interesting things about classes an objects.

class Product {

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

    // Notice I named this method toString instead of status.
    // Naming it toString has a useful effect we'll see below.
	toString() {
		return this.name + " -> " + this.price + " euros";
	}
}

// let is like var but in the new version of JavaScript (ECMAScript 6, or just ES6)
// If you use the new ES6, I recommend to write `let` instead of `var`.
// It will prompt errors that `var` swallows.
//WHAT IS THE CORE DIFFERENCE BETWEEN "let" and "var"?
let p = new Product("vacuum cleaner", 100);


// First, let's see what `toString` is used for:

// Notice that the output of this will contain the result of `toString()`.
// `toString()` is automatically called every time your object has to be turned into a String.
// In this case it's called because you want to concatenate a text and the object contained in `p`.
// Try to rename `toString` to `status` and see what this log produces.
//!! it produces and object BUT WHY? in the previous exercise it didn't!
// maybe the point is: this way I can play with "p", without having to access its "status"/ without having to call "toString() on it; it "stringifies" 
console.log("The product is: " + p);

// The next statement is equivalent:
console.log("The product is: " + p.toString());


// Now, let's see that we can access the properties of the object:
p.price = 150;
p.price += 25;
console.log("The product now is: " + p);


// Now about variables and references.
// When a variable contains an object, it actually doesn't contain the whole
// object inside. The variable just contains a reference to the object
// (actually, the memory address of the object, where the object is stored).

// So, if I do:
let p2 = p;
// Now p2 contains a reference to the same object as p
// So, if I modify p2:
p2.price = 30;
// You'll see the change in p too, since p contains (points to) the same object.
console.log("The product is: " + p);


// Let's see if you can discover what the next console.log would print:

let p3 = new Product("pencil", 3);
p2 = p3;
p.price = p2.price;

// Try to guess what this will print, and uncomment this line to check
console.log("The mysterious product is: " + p);
//well, at least I got it correctly






