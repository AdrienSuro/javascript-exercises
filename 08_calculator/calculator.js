const add = function(num1, num2) {
	let result = num1 + num2 ;
  return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2 ;
  return result ;
};

const sum = function(array) {
  let result = 0;
  for (let i = 0 ; i < array.length ; i++) {
    result += array[i];
  }
  return result;
}

const multiply = function(array) {
  let result = 1;
	for (let i = 0; i < array.length ; i++) {
    result *= array[i];
  }
  return result ; 
};

const power = function(num1, num2) {
	let result = Math.pow(num1, num2) ;
  return result;
};

const factorial = function(num1) {
  let result = 1 ;
	for (let i = num1; i > 0 ; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
