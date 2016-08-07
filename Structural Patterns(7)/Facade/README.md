# Facade
## Definition
Provide a unified interface to a set of interfaces in a subsystem. 
Façade defines a higher-level interface that makes the subsystem easier to use.

## Participants
The objects participating in this pattern are:

- Facade -- In sample code: Mortgage
    - knows which subsystems are responsible for a request
    - delegates client requests to appropriate subsystem objects
- Sub Systems -- In sample code: Bank, Credit, Background
    - implements and performs specialized subsystem functionality
    - have no knowledge of or reference to the facade

## General Formula
``` js
function Facade(name) {
    this.name=name;
}

Facade.prototype={
    method1: function (value) {
        //call subSystem1
        //call subSystem2
        //call subSystem3
        //..
    }
};

var a = new Facade('A');
var result = a.method1("value1");
//...
```

