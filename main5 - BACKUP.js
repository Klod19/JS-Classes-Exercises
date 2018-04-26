
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
        this.discount = 0
	}
    

	addProduct(product) {
        this.products.push(product);
        this.total_price += product.price;
        this.no_discount_price = this.total_price;

        console.log(this.total_price);
        
    }
    // this code checks the final result; i have to call it at the end to add a 10% discount on the total
    quantity_check() {
        let ten_perc = Math.round((this.total_price*10)/100);
        (this.products.length >= 5) ? (this.total_price -= ten_perc ) : this.total_price = this.no_discount_price;
        
//        console.log(this.products);
    }
    
//    if you buy 3 items of the same type (e.g. 3 pencils) you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8 pencils you only pay 6, etc. Change totalPrice so it considers the free items you get. Notice that if you buy 3 pencils you just pay the 3 of them.
    product_check() {
        var count = {};
        var local_discount = 0;
        // the following line works, but I don't get it
//        this.products.forEach(function(x){ counts[x.name] = (counts[x.name] || 0)+1; });
//        var discount = 0;
        this.products.forEach(function(x){  
            if (count[x] === undefined){
                    count[x] = 1;
     
            }
  
            else{
                count[x] = count[x]+1
                if(count[x]%4 === 0){
                    local_discount += x.price  
                }
                   
            }
//            console.log(x);
        });
        
        
        console.log(count);
        console.log(local_discount);
        this.discount = local_discount;
        console.log(this.discount);
        this.total_price -= this.discount
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
//cart.product_check();
console.log("We have a " + cart);
console.log(cart.products)

console.log(cart);

