const removeFromArray = function(...arg) {

    const array = arg.shift();
    let newArray = [];
    
    outer: for (let i = 0; i < array.length; i++) {
      for (let x = 0; x < arg.length; x++) {
        if (array[i] === arg[x]) continue outer;
        } newArray.push(array[i]);
      } return newArray;
    };
  
// Do not edit below this line
module.exports = removeFromArray;


