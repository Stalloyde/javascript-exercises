const palindromes = function (string) {
    const array = string.toLowerCase().replace(/[^a-z]/g,"");
    const reverseArray = array.split("").reverse().join('');
    return(array === reverseArray) ? true: false;
}

// Do not edit below this line
module.exports = palindromes;

// convert string to array, all to lowercase.
//declare array punctuataions. splice out punctuations in array lowercase
// reverse the array.
// compare both new arrays (without punctuations), if similar = true. If not similar = false