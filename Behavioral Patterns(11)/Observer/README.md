# Observer
## Definition
Define a one-to-many dependency between objects so that when one object changes state,
 all its dependents are notified and updated automatically.
 
## Participants
The objects participating in this pattern are:

- Subject -- In sample code: Click
    - maintains list of observers. Any number of Observer objects may observe a Subject
    - implements an interface that lets observer objects subscribe or unSubscribe
    - sends a notification to its observers when its state changes
- Observers -- In sample code: clickHandler
    - has a function signature that can be invoked when Subject changes (i.e. event occurs)
