//Create a function named percentageCalculator
//Add 2 arguments for “number” and “percentage”
//Do the maths required to work out a percentage with the arguments
//Return the result of the maths
//Console.log the returned value

function calculator(number1, number2, operator) {
    let message = '';
    switch(operator) {
        case '+':
            message= number1 + number2;
            break;
        case '-':
            message= number1 - number2;
            break;
        case '*':
            message= number1 * number2;
            break;
        case '/':
            message= number1 / number2;
            break;
        case '%':
            message= number1 % number2;
            break;
        default:
            message = 'Invalid input...';
    }
    console.log(message);
}

calculator(123, 477, '+');
calculator(24, 24, '*');
calculator(123456, 4325, '-');
calculator(8976, 4, '/');
calculator(1267, 7, '%');