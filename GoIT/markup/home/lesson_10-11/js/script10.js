var base = prompt("Enter your number");
var exponent = prompt("Enter degree for your number");

function pow(base, exponent) {
  var result = 1;
  for (var k = 0; k < exponent; k++) {
    result *= base;
  }
  
  return result;
}

var calculationResult = pow(base, exponent);
console.log('Result is ', calculationResult);