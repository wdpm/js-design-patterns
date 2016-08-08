# Chain of Responsibility
## Definition
Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. 
Chain the receiving objects and pass the request along the chain until an object handles it.

## Participants
The objects participating in this pattern are:
- Client -- In sample code: Request
    - initiates the request to a chain of handler objects
- Handler -- In sample code: Request.get() method
    - defines an interface for handling the requests
    - implements the successor link (returning 'this')