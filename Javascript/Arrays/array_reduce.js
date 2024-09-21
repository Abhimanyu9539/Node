const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 1);


// Reduce to a single number
function myFunction(total, value) {
  return total * value;
}

console.log(sum)
