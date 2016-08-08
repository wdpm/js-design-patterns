# Visitor
## Definition
Represent an operation to be performed on the elements of an object structure. 
Visitor lets you define a new operation without changing the classes of the elements on which it operates.

## Participants
The objects participating in this pattern are:

- ObjectStructure -- In sample code: **employees array**
    - maintains a collection of Elements which can be iterated over
- Elements -- In sample code: **Employee objects**
    - defines an accept method that accepts visitor objects
    - in the accept method the visitor's visit method is invoked with 'this' as a parameter
- Visitor -- In sample code: **ExtraSalary**, **ExtraVacation**
    - implements a visit method. The argument is the Element being visited. This is where the Element's changes are made