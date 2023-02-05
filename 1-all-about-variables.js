// On Javascript, you can declare a variable using: var, let, const
var a = 1; // 'var' makes the code run on older browsers, but it isn't recommended to use oftenly
let b = 2; // You should use 'let' when 'const' doesn't apply
const c = 3; // You should always use 'const', unless the variable value isn't constant

/* 'Hoisting' is a term that refers to the behavior of JS files that move all variable declarations to the top of 
the current scope, script or function, therefore, a variable can be used before it was declared */
function undeclaredVariable(){
    x = 1;
    console.log(x);
    var x;
}

function declaredVariable(){
    var x;
    x = 1;
    console.log(x);
}

// Both of these functions will produce the same effect
/* Variables declared using 'let' or 'const' will be moved to the top of the block but are NOT going to be initialized,
the variable will be there but is going to produce a ReferenceError (let) or a SyntaxError (const)*/

/* Variable names can be short or more descriptive, but it needs to follow some specific rules:
1 - Names can contain letters, digits, underscores and dollar signs
2 - Names must begin with a letter (they can also begin with '$' or '_'
3 - Names are case sensitive
4 - Reserved words (like Javascript) cannot be used as names*/

/* The scope determines the accessibility (visibility) of a variable, JS has three types of scope:
1 - Block
    1.1 - Variables declared inside a {} cannot be used outside of the block
    1.2 - Block scope variables can only be 'let' or 'const'. 'var' can NOT have block scope
        1.2.1 - 'var' variables declared inside a {} can be used outside of the block
2 - Function
    2.1 - Variables declared within a function become local to the function and can't be accessed outside of it
    2.2 - Since function scope variables are local, you can't have multiple variables with the same name in multiple functions
    2.3 - Local variables are created when a function starts and deleted when the function is completed
3 - Global
    3.1 - Variables declared outside of a function becomes global and can be accessed anywhere
    3.2 - If you give a value to a variable that hasn't been declared, it will automatically become global*/
