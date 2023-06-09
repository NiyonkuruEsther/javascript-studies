//This has different use case
//1. If it is used inside an object's method this refers to the object itself what we call implicit binding
//2. If it is used inside a function this will reference to the global object or the window object

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};
video.stop = function () {
  return console.log(this, "stop");
};
video.stop();
video.play(); //it will output the whole object contents

//Lets take a look on the second example which is a regular function

function playVideo() {
  return this; //it will refer to the global object
}
console.log(playVideo());
//Using the constructor function
//!Instead of the window object it will refer to the new object created by the new keyword usage
function Video(title) {
  this.title = title; //we add the title property to this new object
  console.log(this);
}

const v = new Video("a");

//!Then the last example

const vid = {
  title: "a",
  tags: ["a", "b", "c"],
  showTag() {
    this.tags.forEach(function (tag) {
      console.log(this); //this this will refer to the global object
    });
  },
};
vid.showTag();

//?What is the difference between the global object and the window object
// The single thread and multi threads
// Arrow functions with aync/await
// Object cloning
// Recursive functions
// Workers, 
