# Memento
## Definition
Without violating encapsulation, capture and externalize an object's internal state so that the object can be restored 
to this state later.

## Participants
The objects participating in this pattern are:

- Originator -- In sample code: Person
    - implements interface to create and restore mementos of itself 
        - -- in sample code: hydrate and dehydrate
    - the object which state is temporary being saved and restored
- Memento -- In sample code: JSON representation of Person
    - internal state of the Originator object in some storage format
- CareTaker -- In sample code: CareTaker
    - responsible for storing mementos
    - just a repository; does not make changes to mementos