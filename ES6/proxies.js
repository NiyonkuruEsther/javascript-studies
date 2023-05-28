//The proxies are there to be used in the place of the original objects
//They define the current behaviour when the properties of the target are accessed

// syntax: let proxy = new Proxy(target, handler);

// target – is an object to wrap.
// handler – is an object that contains methods to control the behaviors of the target.
// The methods inside the handler object are called traps.
//we use getters and setter for the proxies

const user = {
  a: 2,
  b: 3,
};
const handler = {
  //the property is like the key
  get(target, property) {
    //research for the in used in the return
    return property in target ? target[property] : 47;
  },
};
// if we don't have an object yet we can always use an empty object
const obj = new Object(user);
console.log(obj);
const proxyUser = new Proxy(user, handler);
console.log(proxyUser.a, proxyUser.b);
console.log("c" in proxyUser, proxyUser.c);
//in other words the proxy will let create a proxy object and pass statements or functionality for the proxy object properties
//They allow you to define other behaviors instead of what normaly would otherwise happen with other objects
//They can also help you validate values you are passing to the key

//!look for the Number.isNaN and try to defferentiate it with the NaN
//
