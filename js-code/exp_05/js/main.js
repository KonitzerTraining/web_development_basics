var a = 5; // Duck typing
a = "asdf";
var b = 234;
var Product = /** @class */ (function () {
    function Product(p) {
        this.price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this.price;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var p1 = new Product(200);
