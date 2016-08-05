# Builder
## Definition
Separate the construction of a complex object from its representation so that the same construction process can create different representations

## Participants
The objects participating in this pattern are: 

- Director -- In sample code: Shop
    - constructs products by using the Builder's multistep interface
- ~~Builder -- not used in JavaScript~~
    - declares a multistep interface for creating a complex product
- ConcreteBuilder -- In sample code: CarBuilder, TruckBuilder
    - implements the multistep Builder interface
    - maintains the product through the assembly process
    - offers the ability to retrieve the newly created product
- Products -- In sample code: Car, Truck
    - represents the complex objects being assembled

## General Formula
``` js
function Director() {
    this.construct=function (builder) {
        builder.step1();
        builder.step2();
        //...
        return builder.get();
    }
}

function ProductBuilder() {
    this.product=null;
    this.step1=function () {
        this.product=new Product();
    };
    this.step2=function () {
        this.product.addSomeProperty();
    };
    this.get=function () {
        return this.product;
    }
}

function Product() {
    this.prop=1;
    this.addSomeProperty=function () {
        this.prop++;
    };
}

var director = new Director();
var productBuilder = new ProductBuilder();
var product = director.construct(productBuilder);
console.log(product.prop);//2
```
