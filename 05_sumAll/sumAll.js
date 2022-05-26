const sumAll = function(num1, num2) {

    let toSum = [];
    let getSum = 0;
  
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number') || (num1 < 0) || (num2 < 0)) {
      return 'ERROR';
    }
  
    if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      toSum.push(i); //toSum === [1,2,3,4]
      };
    
    } else if 
    
    (num1 > num2) {
      for (let i = num1; i >= num2; i--) {
        toSum.push(i); //toSum === [4,3,2,1]
        };
    }
  
    for (let i = 0; i < toSum.length; i++) {
      getSum += toSum[i];        
      } 
      return getSum; 
    }
  
// Do not edit below this line
module.exports = sumAll;
// (1,4).. need to add all numbers between 1 and 4 ie 1+2+3+4 =10;
//identify all numbers between 1,4
    //two function parameters in sumAll
    //loop first function, i = value of first parameter; i = value of second paramet.. this will iterate all numbers between two parameters
    // push iterated numbers into new array.
    // loop through new array, sum the iterations and push to new variable
    // returnthe sum 
//sum all identified numbers