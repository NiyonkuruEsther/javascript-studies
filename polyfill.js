//!polyfill
//!A polyfill is just a bit of functionality that you are writing in vanilla js to replace something that is potentially native in other browsers or in other places
//!polyfill is simply writing or

//!you build a polyfill by using the prototype object
//!You can use the prototypes with any kind of object
if (!Array.justLetter) {
  //!When you are dealing with prototype make sure you use the function keyword because the arrow function won't work with the this keyword
  Array.prototype.justLetter = function (item) {
    //we use the keyword this to refer to the array that is calling this method
    let newArr = this.filter((item, i) => {
      return i > 4;
    });
    return newArr;
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.justLetter(0));

//polyfills with functions
Function.prototype.justLetter = function () {
  return (this.name = "Yes");
};

function yes() {
  return 2;
}
console.log(yes().justLetter());
