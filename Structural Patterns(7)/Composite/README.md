# Composite
## Definition
Compose objects into tree structures to represent part-whole hierarchies. 
Composite lets clients treat individual objects and compositions of objects uniformly.

## Participants
The objects participating in this pattern are:

- Component -- In sample code: Node
    - declares the interface for objects in the composition
- Leaf -- In sample code: Node
    - represents leaf objects in the composition. A leaf has no children
- Composite -- In sample code: Node
    - represents branches (or subtrees) in the composition
    - maintains a collection of child components
    
## tips
- build a tree data-structure