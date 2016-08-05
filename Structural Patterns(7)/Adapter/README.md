# Adapter
## Definition
Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

## Participants
The objects participating in this pattern are:
- Client -- In sample code: the run() function.
    - calls into Adapter to request a service
- Adapter -- In sample code: ShippingAdapter
    - implements the interface that the client expects or knows
- Adaptee -- In sample code: AdvancedShipping
    - the object being adapted
    - has a different interface from what the client expects or knows