# Interpreter
## Definition
Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

## Participants
The objects participating in this pattern are:

- Client -- In sample code: the run() program.
    - builds (or is given) a syntax tree representing the grammar
    - establishes the initial context
    - invokes the interpret operations
- Context -- In sample code: Context
    - contains state information to the interpreter
- TerminalExpression -- In sample code: Expression
    - implements an interpret operation associated with terminal symbols in the grammar
    - one instance for each terminal expression in the sentence
- NonTerminalExpression -- In sample code: not used
    - implements an interpret operation associated for non-terminal symbols in the grammar