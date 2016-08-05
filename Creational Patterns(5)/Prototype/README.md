# Prototype

## Definition
Specify the kind of objects to create using a prototypical instance, and create new objects by copying this prototype.

## Participants
The objects participating in this pattern are:

- Client -- In sample code: the run() function.
    - creates a new object by asking a prototype to clone itself
- Prototype -- In sample code: CustomerPrototype
    - creates an interfaces to clone itself
- Clones -- In sample code: Customer
    - the cloned objects that are being created

## General Formula
``` js
function Prototype(proto) {
    this.proto = proto;
    this.clone = function () {
        var product = new Product();
        product.prop1 = proto.prop1;
        product.prop2 = proto.prop2;
        return product;
    }
}

function Product(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;

    this.print = function () {
        console.log("prop1: " + this.prop1 + "; prop2: " + this.prop2);
    }
}

function Client() {
    var proto = new Product('A', 'B');
    var prototype = new Prototype(proto);
    var product = prototype.clone();
    product.print();//prop1: A; prop2: B
}

Client();
```