# Flyweight
## Definition
Use sharing to support large numbers of fine-grained objects efficiently.

## Participants
The objects participating in this pattern are:

- Client -- In sample code: Computer
    - calls into FlyweightFactory to obtain flyweight objects
- FlyweightFactory -- In sample code: FlyweightFactory
    - creates and manages flyweight objects
    - if requested, and a flyweight does not exist, it will create one
    - stores newly created flyweights for future requests
- Flyweight -- In sample code: Flyweight
    - maintains intrinsic data to be shared across the application
    