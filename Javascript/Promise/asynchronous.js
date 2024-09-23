// Functions running in parallel wwith other functions

setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  console.log(value);
}