# State
## Definition
Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

## Participants
The objects participating in this pattern are:

- Context -- In sample code: TrafficLight
    - exposes an interface that supports clients of the service
    - maintains a reference to a state object that defines the current state
    - allows State objects to change its current state to a different state
- State -- In sample code: Red, Yellow, Green
    - encapsulates the state values and associated behavior of the state