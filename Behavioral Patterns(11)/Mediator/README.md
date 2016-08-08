# Mediator
## Definition
Define an object that encapsulates how a set of objects interact. 
Mediator promotes loose coupling by keeping objects from referring to each other explicitly, 
and it lets you vary their interaction independently.

## Participants
The objects participating in this pattern are:

- Mediator -- In sample code: Chatroom
    - defines an interface for communicating with Colleague objects
    - maintains references to Colleague objects
    - manages central control over operations
- Colleagues -- In sample code: Participants
    - objects that are being mediated by the Mediator
    - each instance maintains a reference to the Mediator