# JavaScriptHardParts

- JavaScript Principles.
- Callbacks & High Order Functions
- Closure
- Classes/Prototypes & Asynchronicity

# Remember

- Junior engineer takes any feature they're given to build and if they've seen technology or maybe the solution before, they can solve it.
- Mid-level engineer takes any feature they're given to build, and even if they've not seen the technology or solution before, they can figure it out because they've learned how to learn, they're problem solving strong.
- A senior engineer is somebody who can take any given feature, and not only figure out for themselves, but enable the rest of their team to figure it out, because they have technical communication, the ability to explain what their code is doing to somebody else in their team, in a clear and cordial manner.

# Closure

- Closure is the most esoteric of JavaScript concepts.
- Enables powerful pro-level functions like 'once' and 'memoize'.
- Many JavaScript design patternts including the module pattern use closure.
- Build iterators, handle partial application and maintain state in an asynchronous world.

## Functions with memories

- When our functions get called, we create a live store of data (local memory/variable environment/state) for that function's execution context.
- When the function finishes executing, its local memory is deleted (except the returned value).
- But what if our functions could hold on to live data between executions?
- This would let our function definitions have an associated cache/persistent memory.
- But it all starts with us returning a function from another function.

## Closure gives our functions persistent memories and entirely new toolkit for writing professional code

- Helper functions: Everyday professional helper functions like 'once' and 'memoize'.
- Iterators and generators: Which use lexical scoping and closure to achieve the most contemporary patterns for handing data in JavaScript.
- Module Pattern: Preserve state for the life of and application without polluting the global namespace.
- Asynchronous JavaScript: Callbacks and Promises rely on closure to persist state in an asynchronous environment.

## Event Looop

- The event loop has only one job, is to inspect the call stack and check if call stack is empty to assign a task of the callback queue. This concept is fundamental to the principeles of asynchronous environment.
