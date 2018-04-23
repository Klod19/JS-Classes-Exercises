
console.log("Objects containing other objects");

// Let's remember our Product class

class Product {

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	toString() {
		return this.name + " " + this.price + " euros";
	}
}

// And create a couple of products
let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);

// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {

	constructor() {
		this.products = []; // empty at first
        this.total_price = 0;
        this.no_discount_price = 0
//        this.no_discount_price = 0;
	}
    
//    check_quantity(product) {
//        let ten_perc = Math.round((product.price*10)/100);
//        (this.products.length >= 5) ? (product.total_price -= ten_perc ) : product.total_price = product.no_discount_price;
//    }

	addProduct(product) {
        this.products.push(product);
        this.total_price += product.price;
        this.no_discount_price = this.total_price;

        console.log(this.total_price);
        
//        this.no_discount_price = this.total_price;
   
  
//        this.check_quantity(product);
        //add a 10% discount if you buy 5 or more products;
  
//        let ten_perc = Math.round((this.total_price*10)/100);
//        (this.products.length >= 5) ? (this.total_price = this.no_discount_price - ten_perc ) : this.total_price = this.no_discount_price
    }
    // this code check the final result; i have to call it at the end;
    quantity_check() {
        let ten_perc = Math.round((this.total_price*10)/100);
        (this.products.length >= 5) ? (this.total_price -= ten_perc ) : this.total_price = this.no_discount_price;
    }
    

    

	toString() {
		return "cart with: " + this.products + "; Total price: " + this.total_price + " euros";
	}
}


// We can create a cart and add the products we created before

let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p3);
cart.addProduct(p3);
cart.addProduct(p3);
cart.quantity_check();

console.log("We have a " + cart);


