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
