# Strategy
## Definition
Define a family of algorithms, encapsulate each one, and make them interchangeable. 
Strategy lets the algorithm vary independently from clients that use it.

## Participants
The objects participating in this pattern are:

- Context -- In sample code: Shipping
    - maintains a reference to the current Strategy object
    - supports interface to allow clients to request Strategy calculations
    - allows clients to change Strategy
- Strategy -- In sample code: UPS, USPS, Fedex
    - implements the algorithm using the Strategy interface