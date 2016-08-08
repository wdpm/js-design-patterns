# Template Method
## Definition
Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. 
Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

## Participants
The objects participating in this pattern are:

- AbstractClass -- In sample code: datastore
    - offers an interface for clients to invoke the templateMethod
    - implements template method which defines the primitive Steps for an algorithm
    - provides the hooks (through method overriding) for a client developer to implement the Steps
- ConcreteClass -- In sample code: mySql
    - implements the primitive Steps as defined in AbstractClass