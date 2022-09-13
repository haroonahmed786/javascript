
 const sum = (a,b) => a+b;

 const curriedSum = (a) => (b) => a+b;

 curriedSum(5);

 (b) => a+b

 curriedSum(5)(5)


//multiply
const multiply = (a,b) => a*b;

const curriedMultiply = (a) => (b) => a*b;

curriedMultiply();

(b) => a*b

curriedMultiply(5)(5);
