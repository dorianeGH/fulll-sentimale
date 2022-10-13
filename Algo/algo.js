const fizzBuzz = (n) => {
  let firstString, secondString, result;
  if (n % 3 === 0) {
    firstString = "fizz";
  }
  if (n % 5 === 0) {
    secondString = "buzz";
  }
  firstString === "" && secondString === ""
    ? (result = n)
    : (result = firstString + secondString);
  return result;
};
/* //Ternaire
const fizzBuzz = (n) => {
  let firstString, secondString, result;
  n % 3 === 0 ? (firstString = "fizz") : (firstString = "");
  n % 5 === 0 ? (secondString = "buzz") : (secondString = "");
  firstString === "" && secondString === ""
    ? (result = n)
    : (result = firstString + secondString);
  return result;
}; */

console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
