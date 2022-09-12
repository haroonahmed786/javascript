// let + const
var a = 'test';
var b = true;
var c = 789;
a = test;


const a = 'test';
  let b = true;
  let c = 789;

  console.log(a);

  // Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var {firstName,lastName,age,eyeColor} = person;

 console.log(person);


  // Object properties
const a = 'test';
let b = true;
let c = 789;

var okObj = { 
   a,
   b,
   c
};
 console.log(okObj);


  // Template strings
  var firstName = "Haroon";
  var city      = "Haripur";
  var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

  console.log(message);


  // default arguments
// default age to 10;
function isValidAge(age) {
    return age
    console.log(age);
}

const isValidAge = (age = 15) => age;


   // Arrow functions
function whereAmI(username, location) => `${username} "I am not lost" + " && "+ ${location}` "I am totally lost!";
 console.log(whereAmI("Haroon","Haripur"));

     if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
