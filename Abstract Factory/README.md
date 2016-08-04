# Abstract Factory

## Definition
Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

## Participants
The objects participating in this pattern are: 

- ~~AbstractFactory -- not used in JavaScript~~
    - declares an interface for creating products
- ConcreteFactory -- In sample code: EmployeeFactory, VendorFactory
    - a factory object that 'manufactures' new products
    - the create() method returns new products
- Products -- In sample code: Employee, Vendor
    - the product instances being created by the factory
- ~~AbstractProduct -- not used in JavaScript~~
    - declares an interface for the products that are being created
    
## General Formula
``` js
function Product(name) {
    this.name = name;
}

function ProductFactory() {
    this.create = function (name) {
        return new Product(name);
    }
}

var productFactory = new ProductFactory();
productFactory.create("product-1");
```