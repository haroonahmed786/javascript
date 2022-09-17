// #1) Check if this array includes the name "John".

var a = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

document.write(a +"<br><br>")

var b = a.includes("john");

document.write(b);

document.write("<br><br>");

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.

var x = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

document.write(x +"<br><br>")

var y = x.includes("Johnathan");

document.write(y);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const square = (x)=> x**2

on console
square(10)....ans(100)