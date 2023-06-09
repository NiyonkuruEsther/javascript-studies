// classes
// ?What does the this keyword in the clasess does?
// Can we use the constructor on functions inside the class??
class Car {
  // We use a constructor to initialize the variables
  constructor(color) {
    this.color = color;
    console.log(this);
  }
  //   Remember that the type of the class is a function
}
const obj = {
  name: "Esther",
};
console.log(obj);
console.dir("Hello");

class Person {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  static getAdultAge() {
    return 18;
  }

  // getters for validations which relates to encapsulation
  get canVote() {
    return this.age >= Person.getAdultAge();
  }

  // Setter for the validation
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.name = `${firstName} ${lastName}`;
  }
}

const person1 = new Person("John Doe", 30);
person1.sayHello(); // Output: Hello, my name is John Doe and I am 30 years old.
console.log(Person.getAdultAge()); // Output: 18
console.log(person1.canVote); // Output: true

person1.fullName = "Jane Smith";
console.log(person1.name); // Output: Jane Smith
