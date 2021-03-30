//Create a function named drinkOrder
//Add 2 arguments for “size” and “drink”
//Use a switch statement to determine where the functional code needs to be written
//Create a message in each case statement to be returned.
//Console.log the returned message

function drinkOrder(size, drink) {
    let message = '';
    switch (drink) {
        case 'cola':
            message = drink + ' is amazing! Thanks for ordering a ' + size + ' one!';
            break;
        case 'lemonade':
            message = 'Well done! ' + drink + ' is so fresh! Grab a ' + size + ' one!';
            break;
        case 'orangeade':
            message = 'Whatever, ' + size + ' ' + drink + ' coming up!';
            break;
        default:
            message = 'I have no idea what you are talking about...';
    }
    console.log(message);
}
drinkOrder('small', 'lemonade');
drinkOrder('large', 'cola');
drinkOrder('extra large', 'orangeade');
drinkOrder('extra large', 'red bull');