const ftoc = function(f) {
  let celsius = (f - 32)*(5/9) ; 
  celsius = Math.round(celsius * 10) / 10 ;
  return celsius ;
};

const ctof = function(c) {
  let fahrenheit = (c*(9/5)+32) ;
  let temp = Math.round(fahrenheit * 10) / 10 ;
  return temp ;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
