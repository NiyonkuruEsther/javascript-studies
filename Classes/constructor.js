function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Creating an instance of the Person object using the constructor
var person1 = new Person("John", 30);
var person2 = new Person("Jane", 25);

console.log(person1.name); // Output: John
console.log(person2.age); // Output: 25
//   In JavaScript, a constructor is a special method used for creating and initializing objects. Constructors are defined within classes or functions and are responsible for setting up the initial state of an object when it is instantiated.

//   Here's an example of a constructor function in JavaScript:

//   In the example above, the `Person` function serves as the constructor for creating `Person` objects. Inside the constructor, the `this` keyword refers to the newly created object. The constructor sets the `name` and `age` properties of the object based on the arguments passed during instantiation.

//   To create a new object using a constructor, you use the `new` keyword followed by the constructor function's name, along with any necessary arguments.

//   Constructors can also define methods and assign them to the object's prototype, allowing all instances of the object to share the same set of methods. This approach helps in reducing memory consumption and improving performance by avoiding method duplication for each object instance.

//   Constructors are commonly used in JavaScript to implement object-oriented programming principles and create multiple objects with similar properties and behaviors.
