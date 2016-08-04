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

```