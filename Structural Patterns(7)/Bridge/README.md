# Bridge
## Definition
Decouple an abstraction from its implementation so that the two can vary independently.

## Participants
The objects participating in this pattern are:

- Client -- In sample code: the run() function.
    - calls into Abstraction to request an operation
- ~~Abstraction -- not used in JavaScript~~
    - declares an interface for first level abstraction
    - maintains a reference to the Implementor
- RefinedAbstraction -- In sample code: Gestures, Mouse
    - implements and extends the interface defined by Abstraction
- ~~Implementor -- not used in JavaScript~~
    - declares an interface for second level or implementor abstraction
- ConcreteImplementor -- In sample code: Screen, Audio
    - implements the Implementor interface and defines its effects

## General Formula
see ``Bridge.js``