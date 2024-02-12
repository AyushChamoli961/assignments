/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  // Creating and returning a new Promise
  return new Promise((resolve) => {
    // Using setTimeout to simulate a delay of n seconds
    setTimeout(() => {
      // Resolving the Promise after the delay
      resolve();
    }, n * 1000); // Converting seconds to milliseconds
  });
}



module.exports = wait;
