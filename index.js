function receivesAFunction(callback) {
    callback();
    return callback;
  }
  
  function myCallback() {
    console.log("Hello from the callback function!");
  }
  
  const returnedCallback = receivesAFunction(myCallback);
  
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("Hello, I am the named function!");
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // code inside the anonymous function
    };
  }