# Command
## Definition
Encapsulate a request as an object, thereby letting you parameterize clients with different requests, 
queue or log requests, and support undoable operations.

## Participants
The objects participating in this pattern are:
- Client -- In sample code: the run() function
    - references the Receiver object
- Receiver -- In sample code: Calculator
    - knows how to carry out the operation associated with the command
    - (optionally) maintains a history of executed commands
- Command -- In sample code: Command
    - maintains information about the action to be taken
- Invoker -- In our sample code: the user pushing the buttons
    - asks to carry out the request