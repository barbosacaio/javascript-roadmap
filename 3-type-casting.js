// Type Casting is converting one data type to another data type
// The type casting can be implicit or explicit

// Implicit Type Casting
    /* Implicit conversions are the ones that are made by automatically due to internal requirement by
    the compiler or interpreter */
    
    /* For example, JS expects a boolean value in a conditional expression, so JS will temporarily convert
    the value in parentheses to a boolean */
    let value = 1;
    if(value){
        console.log("Yes, 'value' exists.");
    }

    // Implicit Type Casting also happens when using '=='
    console.log(100 = '100');

// Explicit Type Casting
    /* Explicit conversions are the ones made forcefully by the developer and can only be done for strings,
    numbers and boolean (object) data types */
    let input;
    parseInt(input); // Converts it to an integer
    parseFloat(input); // Converts it to a float
    toString(input); // Converts it to a string

// Implicit Type Casting is also known as Coercion
// Explicit Type Casting is also known as Type Casting