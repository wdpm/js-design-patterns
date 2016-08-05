# Factory Method

## Definition
Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

## Participants
The objects participating in this pattern are: 
- Creator -- In sample code: Factory
    - the 'factory' object that creates new products
    - implements 'factoryMethod' which returns newly created products
- ~~AbstractProduct -- not used in JavaScript~~
    - declares an interface for products
- ConcreteProduct -- In sample code: Employees
    - the product being created
    - all products support the same interface (properties and methods)

## General Formula
``` js
function ProductA() {
    this.type = "A";
    this.prop = "A property";
}
function ProductB() {
    this.type = "B";
    this.prop = "B property";
}
function Factory2() {
    this.createProduct = function (type) {
        var product = {};
        switch (type) {
            case "A":
                product = new ProductA();
                break;
            case "B":
                product = new ProductB();
                break;
            default:
                break;
        }

        product.type = type;
        product.info = function () {
            return this.type + ": " + this.prop;
        };
        return product;
    }
}

var factory2 = new Factory2();
var a = factory2.createProduct("A");
var b = factory2.createProduct("B");
console.log(a.info());//A: A property
console.log(b.info());//B: B property
```