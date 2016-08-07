# Decorator
## Definition
Attach additional responsibilities to an object dynamically. 
Decorators provide a flexible alternative to subclassing for extending functionality.

## Participants
The objects participating in this pattern are:

- Client -- In sample code: the run() function
    - maintains a reference to the decorated Component
- Component -- In sample code: User
    - object to which additional functionality is added
- Decorator -- In sample code: DecoratedUser
    - 'wraps around' Component by maintaining a reference to it
    - defines an interface that conforms to Component's interface
    - implements the additional functionality (addedMembers in diagram)

## General Formula
``` js
function A(name) {
    this.name = name;
}

function DecoratorA(a, prop1, prop2) {
    this.a = a;
    this.name = a.name;
    this.prop1 = prop1;
    this.prop2 = prop2;
}

var a = new A('A');
console.log(a.name);//A
var decoratorA = new DecoratorA(a, 'A-Prop1', 'A-Prop2');
console.log(decoratorA.name + ", " + decoratorA.prop1 + ", " + decoratorA.prop2);//A, A-Prop1, A-Prop2
```