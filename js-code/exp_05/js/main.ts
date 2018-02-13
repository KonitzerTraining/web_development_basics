let a = 5; // Duck typing
a = "asdf";

let b: string = 234;

class Product {

    private priceInternal;

    constructor(p) {
        this.priceInternal = p
    }

    get price ():number {
        return this.priceInternal;
    }
}

let p1 = new Product(200);
