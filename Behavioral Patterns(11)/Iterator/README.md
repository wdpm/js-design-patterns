# Iterator
## Definition
Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

## Participants
The objects participating in this pattern are:

- Client -- In sample code: the run() function
    - references and invokes Iterator with collection of objects
- Iterator -- In sample code: Iterator
    - implements iterator interface with methods first(), next(), etc
    - keeps track of current position when traversing collection
- Items -- In sample code: Items
    - individual objects of the collection being traversed