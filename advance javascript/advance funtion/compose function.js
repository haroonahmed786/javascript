const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num+1;

compose(sum,sum)(5);

//multiply

const compose = (f,g) => (a) => f(g(a));

const mul1 = (num) => num*2;
const mul2 = (num) => num*5;

compose(mul1,mul2)(5);