// One of the things that I saw that people explain differently
// from my research I did my own discovery

// The event loop a continous process that runs in the background 
// constantly checking if the call stack is empty and if the are 
// any events in the event queue waiting, just making sure there
//  asynchronous operations are executed in a manner which is not blocking

// It has three components

// Callstack: 

// the callstack keeps tracks of the functions calls in the program
// It operates as LIFO manner that means
// The most recenlty added function is the first one to be executed

// Heap: 

// The heap is where objects and variables are allocated in unstructured way during runtime 

// The Even Queue: 

// This is where the events and the tasks to be processed are held
// They can include user interactions (such as mouse clicks or keyboard input), 
// timer callbacks, network responses, 

