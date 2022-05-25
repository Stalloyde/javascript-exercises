const reverseString = function(word) {
    let string = '';

    const splitString = word.split("");
    const reverseArray = splitString.reverse();
    string = reverseArray.join("");
    return string;
}
// Do not edit below this line
module.exports = reverseString;


/*
passing parameter of word to callback function
convert parameter letters to array
reverse array
convert array to string
assign reverse array to variable string
return string

*/