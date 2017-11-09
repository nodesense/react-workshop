//understanding this.

var Product =  (function () {
    function Product(name) {
        this.name = name;
    }
    Product.prototype.getName = function () {
        return   this.name;
    };

    Product.prototype.setName = function (name) {
        this.name = name;
    };

    Product.prototype.sayName = function() {
        console.log("Hello Phone name", that.getName())
    }

    Product.prototype.startTimer = function () {
        //fix
        var that = this;
         setInterval( function() {
             //console.log("Phone Name ", this.getName());
             console.log("Phone Name ", that.getName());
         }, 2000)
    };
    
    return Product;
} () ); // ==> Immediately Invoked Function Execution IIFE

var product = new Product("Apple iPhone")
product.startTimer()

