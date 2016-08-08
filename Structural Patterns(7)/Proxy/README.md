# Proxy
## Definition
Provide a surrogate or placeholder for another object to control access to it.

## Participants
The objects participating in this pattern are:

- Client -- In sample code: the run() function
    - calls Proxy to request an operation
- Proxy -- In sample code: GeoProxy
    - provides an interface similar to the real object
    - maintains a reference that lets the proxy access the real object
    - handles requests and forwards these to the real object
- RealSubject -- In sample code: GeoCoder
    - defines the real object for which service is requested