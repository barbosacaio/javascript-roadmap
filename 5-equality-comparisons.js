// Value Comparison Operators
    // '==' compares the value and does the coercion before to compare only the value of both sides
        console.log(1 == "1"); // Returns 'true'
    // '===' compares the value AND the data type, so it doesn't do any type of coercion before
        console.log(1 === "1"); // Returns 'false'
    // 'Object.is' is used to determine whether two values are the same or not
        console.log(Object.is("Caio", "Caio")); // Returns 'true'

// Equality Algorithms
    // 'isLooselyEqual' works the same as '=='
    // 'isStrictlyEqual' works the same as '==='
    // 'SameValue' works the same as 'Object.is'
    // 'SameValueZero' works the same as 'SameValue", but, 0 and -0 are equal