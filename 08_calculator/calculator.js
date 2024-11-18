const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let total = nums.reduce((acc, curr) => {
    return acc + curr
  },0);
  return total;
};

const multiply = function(nums) {
  let total = nums.reduce((acc, curr) => {
    return acc * curr
  },1);
  return total;
};

const power = function(a, b) {
	return Math.pow(a,b)
};

const factorial = function(n) {
	result = 1
  for(i=1; i<=n;i++){
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
