
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
let p1 = new Product("vacuum cleaner Bosch", 100);
let p1_replace = new Product ("vacuum cleaner Borscht ", 50)
let p2 = new Product("pencil fancy", 3);
let p2_replace = new Product("pencil crappy", 1);
let p3 = new Product("bike", 300);
let p3_replace = new Product("scruffy bike", 150);


// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {

	constructor() {
		this.products = []; // empty at first
        this.products_mirror = this.products;//it should be updated with this.products, or?
        this.total_price = 0;
        this.total_price_mirror = this.total_price;
        this.no_discount_price = 0;
        this.discount = 0;
        this.global_count = {};
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
//    if you buy 3 items of the same type (e.g. 3 pencils) you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8 pencils you only pay 6, etc. Change totalPrice so it considers the free items you get. Notice that if you buy 3 pencils you just pay the 3 of them.
        var count = {};
        var local_discount = 0;
        // the following line works, but I don't get it:
//        this.products.forEach(function(x){ counts[x.name] = (counts[x.name] || 0)+1; });
        //the same result as above is achieved with:
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
        });
        console.log(count);
        console.log("local_discount: " + local_discount);
        this.discount = local_discount;
        console.log("this.discount: "  + this.discount);
        this.total_price -= this.discount
        this.global_count = count
        console.log(this.global_count);

    }
    
//4) Sometimes a product is sold out and has to be replaced by a new one. Add a method replace(productName, replacementProduct) that looks for products with productName and replaces them by new instances of the product like replacementProduct. Notice that productName is a string, and replacementProduct is a Product. Also, bear in mind that you don't have to add the replacementProduct itself to the cart, but create new products like that one (whenever necessary).
    
    replace(productName, replacementProduct) {
        var array = this.products_mirror;
        console.log(array);
        var new_price = this.total_price
        console.log(new_price);
        var original_price_sum = 0; // this is catually useless
        var substitute_price_sum = 0;
        var check = false;
        console.log(array);
        array.forEach(function(prod, i){
            if (prod.name == productName){
                console.log(prod.price);
                original_price_sum += prod.price; //this is useless, the substitute price in the next loop is enough;
                console.log(original_price_sum);
                array.splice(i, 1, replacementProduct);
                console.log(prod.price)
                console.log(array);
                check = true
            }
        })
        console.log(check);
        console.log(array);
        console.log(original_price_sum);
        console.log(substitute_price_sum);

        array.forEach(function(prod, i){//THIS IS THE NEW ARRAY!!! RETURNS THE OLD PRICES + THE NEW!!!
            if(check = true){
                substitute_price_sum += prod.price;
            }
        })
        console.log(array);
        console.log("substitute_price_sum: " + substitute_price_sum);
        // FOR THIS I NEED A COUNT OF THE PRODUCTS; MAKE AN ARRAY OF THEM!
//        new_price = (new_price + sobstitute_price_sum) - original_price_sum;
        new_price = substitute_price_sum;
        this.products = array;
        this.total_price = new_price; 
        console.log(this.products);
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
//to add discounts:
cart.quantity_check();
console.log("We have a " + cart);
cart.replace("vacuum cleaner Bosch", p1_replace);
//cart.replace("bike", p3_replace);
//to add discounts to the new price:
cart.quantity_check();
console.log(cart)
console.log("We have a replacement " + cart)
