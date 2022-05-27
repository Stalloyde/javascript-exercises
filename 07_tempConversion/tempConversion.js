const ftoc = function(fInput) {
  let getCelsius = Math.round((fInput -32) * (5/9) *10)/10;
  
    return getCelsius;
  }

const ctof = function(cInput) {
  let getFahrenheit = Math.round((cInput * 9/5 + 32) *10)/10;
  
      return parseFloat(getFahrenheit.toFixed(1));
    }

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};