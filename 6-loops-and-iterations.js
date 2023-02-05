// For
    // The 'for' loop is useful to run the same code over and over with different values, such as terms of an array
    const programmingLanguages = ["Javascript", "PHP", "Python"];

    for(let i = 0; i < programmingLanguages.length; i++){
        console.log(programmingLanguages[i]);
        i++;
    }

// For...In
    // The 'for...in' loops through the properties of an object
    const me = {name:"Caio", surname:"Barbosa", age:18}

    for(let i in me){
        console.log(me[i]);
            // Returns:
                // 'Caio'
                // 'Barbosa'
                // 18
    }

// For...Of
    // Loops through the values of an iterable object
    const cars = ["BMW", "Volvo", "Mini"];

    let text;
    for(let i of cars){
        text += i;
    }

// While
    // The 'while' loops through a block of code while a condition is true
    while(i < 10){
        console.log(i);
        i++;
    }

// Do...While
    // Works the same as the 'while' loop but it'll run once before verifying the condition
    do{
        console.log("Test");
        i++;
    }while(i < 10);

// Break...Continue
    // The 'break' statement can be used to get out of a 'switch' or loop
    for(let i = 0; i < 10; i++){
        if(i === 3){
            break;
        }
        console.log(i);
    }

    // The 'continue' statement breaks one iteration of the loop and continues with the next one
    // This example will skip the number '3'
    for(let i = 0; i < 10; i++){
        if(i === 3){
            continue;
        }
        console.log(i);
    }

// Labeled Statements
    /* The 'continue' statement(with or without a label) can only be used to skip one loop iteration. The 'break' 
    statement, without a label, can only be used to jump out of a loop or switch. The 'break' statement WITH a 
    label can be used to jump out of any code block */
    const countries = ["Brazil", "Germany", "USA", "China", "Japan"];
    list:{
        text += countries[0] + "<br>";
        text += countries[1] + "<br>";
        text += countries[2] + "<br>";
        break list;
        text += countries[3] + "<br>";
        text += countries[4] + "<br>";
    }