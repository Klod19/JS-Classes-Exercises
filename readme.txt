Important: always implement one exercise at a time (if possible just parts of it), and test each solution (or each change). The general idea is, code a bit and try, code a bit and try...

Here's an example with an explanation about classes in JavaScript.

Classes were added in last version of JavaScript (called ECMAScript 6 or just ES6). It's something similar to how classes work in other languages (Java, Ruby, etc). This is a very important concept in programming, so sooner or later you'll want to learn about it. (And I highly recommend you to do it before the Java modules).

In this example you will find an index.html and 3 JavaScript files: main1.js, main2.js and main3.js.

The index.html loads main1.js. Read the main1.js file and see how it creates a plain literal object with some methods.

When you understand main1.js make index.html load main2.js instead, and try to understand what main2.js does. It just creates the object from inside a function, to avoid code repetition.

Finally replace main2.js by main3.js, where you can see how you can use classes instead of plain objects.


You can play with the Car class in main3.js to understand how it works.
Suggested exercises:

1) Add another property like model, so you can create a "Ford" with model "Mondeo". Make the status method display the model too.
2) Fix the brake method so the car never reduces its speed below zero (a Car can't run at -50 km/h) even when you try to brake more than necessary.
3) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
4) Add a method that returns a boolean saying if the car is running (speed is greater than zero) or not.


You can also try to create other classes. For example a TV class:

1) Create a TV class with properties like brand, channel and volume.
    Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
4) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".


Look for main4.js and main5.js here.

After reading, playing with them and understanding what they do, here are some exercises.

1) In ShoppingCart, define a method totalPrice() that returns the total amount of the products it contains.

2) Now let's say that, if you buy 5 products or more, you have a 10% of discount. Change totalPrice to reflect this calculation.

3) Besides the previous discount, if you buy 3 items of the same type (e.g. 3 pencils) you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8 pencils you only pay 6, etc. Change totalPrice so it considers the free items you get. Notice that if you buy 3 pencils you just pay the 3 of them.

4) Sometimes a product is sold out and has to be replaced by a new one. Add a method replace(productName, replacementProduct) that looks for products with productName and replaces them by new instances of the product like replacementProduct. Notice that productName is a string, and replacementProduct is a Product. Also, bear in mind that you don't have to add the replacementProduct itself to the cart, but create new products like that one (whenever necessary).

Important: always implement one exercise at a time (if possible just parts of it), and test each solution (or each change) with different combinations of products. The general idea is, code a bit and try, code a bit and try...