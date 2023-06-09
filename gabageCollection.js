// The garbage collector in JavaScript typically uses the following techniques to identify and collect garbage:

// Reference Counting:

// The garbage collector keeps track of the number of references to each object.
// When an object's reference count reaches zero, meaning there are no more references to it, the object is considered garbage and can be collected.

// Mark and Sweep:

// This is the most commonly used garbage collection algorithm in JavaScript.
// The garbage collector traverses the entire object graph, starting from the roots (global objects, stack frames, etc.).
// It marks all objects that are reachable from the roots as live objects.
// Then, it sweeps through the entire heap, freeing the memory occupied by objects that are not marked as live (garbage).

// Generational Collection:

// This technique divides objects into different generations based on their age.
// Young objects that are created recently are considered more likely to become garbage soon.
// The garbage collector performs more frequent and faster collections on younger generations.
// Older objects that survive multiple collections are promoted to older generations and undergo less frequent garbage collection.
