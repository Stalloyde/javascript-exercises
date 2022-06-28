const add = function(a,b) {
    return a+b;
  }

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  return a.reduce((acc, cur) => acc + cur,0);
};


const multiply = function(b) {
  return b.reduce((acc, cur) => acc * cur);
};

const power = function(a,b) {
return Math.pow(a,b);	
};

const factorial = function(a) {
  if (a === 0) return 1;

  let factorialised = 1;
  for (let i = a; i > 0; i--) {
    factorialised *= i;
  }
  return factorialised;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
