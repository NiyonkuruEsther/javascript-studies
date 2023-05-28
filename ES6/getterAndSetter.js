// The getters are used to access methods as the proper properties
// and setters are used to change(mutate) them
// ! Gtters and setters are used on the methods but you can also affect the properties with this keyword
const person = {
  //why don't we name our constant in upper case?
  //for getters and setters do we have only one parameter passed?
  lastName: "Doe",
  set fullName(firstName) {
    this.firstName = firstName;
  }, //goes first
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  }, //goes second
};
person.fullName = "Doe";
console.log(person.fullName);
