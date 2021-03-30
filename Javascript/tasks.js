//Task 1
//Write a loop that outputs the 7 times table from 7*1=7 to 7*12=84

for (var i=1; i<=12; i++) {
    var result = i * 7;
    console.log(`${result} is 7 x ${i}`);
}

//Task 2 
//Create an array of your favourite foods.
//Print some of them to the screen.

let myFavouriteFoods = [
    'Noodles' ,
    'Chicken',
    'Apples',
    'Pizza'
]
console.log(myFavouriteFoods[2]);
console.log(myFavouriteFoods[3])


//Task 3
// Use a for loop to print a list of all your favourite fods

for(i=0; i < myFavouriteFoods.length; i++) {
    console.log(myFavouriteFoods[i]);
}

//Task 4
// Create an object to hold information on your favourite recipe. Then display the properties on screen.
// Recipe properties:
//-recipeTitle (a string)
//-servings (a number)
//-ingredients (an array of strings)
//-directions(an array of strings)

var myRecipe = {
    recipeTitle: 'Chicken Noodles',
    servings: 2,
    ingredients: [
        'Onions',
        'Chicken',
        'Garlic',
        'Soy sauce',
        'Bean sprouts',
        'Noodles'

    ],
    directions: [
        'Heat the wok, add a tablespoon of oil',
        'Fry the chicken until brown',
        'Add garlic and onions and cook for 2 mins',
        'Add the soy sauce and nooodles',
        'Cook until noodles are warm'
    ],
    //Function from Task 5
    letsCook: function() {
        document.write(`I'm hyngry! Let's cook ${this.recipeTitle}`)
    }
}
document.write(`${myRecipe.recipeTitle} <br><br>`);
document.write(`Serves: ${myRecipe['servings']}<br><br>`);
document.write('Ingredients:' + '<br>' )
for (i=0; i<myRecipe.ingredients.length; i++){
    document.write(`-${myRecipe.ingredients[i]} <br>`);
}
document.write(`<br> Directions: <br>`)
for(i=0; i<myRecipe.directions.length; i++){
    document.write(`${i+1}. ${myRecipe.directions[i]} <br>`)
}

//Task 5
//Add a function called letsCook
//Have it say: "I'm hungry! Let's cook..." with the name of your recipe title.
//Call your new method

myRecipe.letsCook();