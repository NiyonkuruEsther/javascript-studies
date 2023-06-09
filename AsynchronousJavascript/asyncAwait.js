// AsyncAwait(ES8) is a feature that allows you to write async fucntions 
//  


//We have a promise version of setTimeout that we are going to convert to async await
// There are four stages a promises can exist in
// 1. Pendind stage: Not yet reject or accepted
// 2. Fulfilled stage: Accepted
// 3. Rejected stage: Rejected
// 4. Settled stage: not pending whether fullfilled or rejected

// function setTimeoutPromise(delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) return reject("Delay must be greater than 0");

//     setTimeout(() => {
//       resolve(`You waited ${delay} milliseconds`);
//     }, delay);
//   });
// }

setTimeoutPromise(250)
  .then((msg) => {
    console.log(msg);
    console.log("First Timeout");
    return setTimeoutPromise(500);
  })
  .then((msg) => {
    console.log(msg);
    console.log("Second Timeout");
  });

//with the async keyword it is like replacing the promises

//now lets convert the above promise to async/await
async function setTimeoutPromise() {
  //this means the msg1 will wait for the setTimeoutPromise(250) to complete
  const msg1 = await setTimeoutPromise(250);
  console.log(msg1);
  console.log("first Timeout");
  //Also here there will waiting
  const msg2 = await setTimeoutPromise(500);
  console.log(msg2);
  console.log("second Timeout");
}

//And all we need to do is call that asynchronous function
setTimeoutPromise(300);
// setTimeoutPromise(250)
//   .then((msg) => {
//     console.log(msg);
//     console.log("First Timeout");
//     return setTimeoutPromise(500);
//   })
//   .then((msg) => {
//     console.log(msg);
//     console.log("Second Timeout");
//   });
