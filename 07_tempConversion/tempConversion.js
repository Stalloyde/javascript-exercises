const ftoc = function(fInput) {
  let getCelsius = (fInput -32) * 5/9;
  
    return parseFloat(getCelsius.toFixed(1));
  }

const ctof = function(cInput) {
  let getFahrenheit = (cInput * 9/5) + 32;
  
      return parseFloat(getFahrenheit.toFixed(1));
    }

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};