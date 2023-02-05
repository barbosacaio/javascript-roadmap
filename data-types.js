// JS has 8 data types:
// String
let name = "Caio";

// Number
let age = 18;

// bigInt
let bigNumber = 9223372036854775807

// Boolean
let studying = true;

// Undefined
let undefined;

// Null
let nullVariable = null;

// Symbol
const symbol = Symbol("symbol");

// Object
    // Objects can be of 3 types:
    // An object
    const person = {firstname:"Caio", lastname:"Barbosa"};

    // An array
    const programmingLanguages = ["Javascript", "PHP", "Python"];

    // A date
    const birthday = new Date("2022-04-16");

// You can use the "typeof" operator to find the data type of a variable
typeof "Caio";
typeof age;

/* There's some observations that you need to be sure to remember
The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of undefined is undefined
The data type of a variable that's not been assigned is also undefined*/