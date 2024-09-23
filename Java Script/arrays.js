const friends = ["Tom", "Mia", "Lee"]; //The values of an array are called elements.
console.log(friends);

const temperature = [17 , 20, 26, 24];
console.log(temperature[1]); // = 20

//To update the temperature value at the second index, access it through "Temperature[2]", then use = 
temperature[2] = 35;
console.log(temperature);
// index                0    1   2   3
// const temperature = [17 , 20, 35, 24];


// ToDos
const toDo = ["call mom", "dishes"]; // To add a value like groceries to an array, we code the array name toDo, follwed by a period
toDo.push("groceries");
 // toDo.push("Groceries", "Feed cat") we can add mulitple values with ".push()" by separting them with a comma. 
console.log(toDo)

const toDo2 = ["call mom", "clean room"];
toDo2.pop(); // To remove the last element of the array, we code the array name toDo, a period ".", and the array method "pop()"
console.log(toDo2)

//When we assign toDo.pop() to a variable, the variable stores the value we're removing.
const toDo3 = ["text friend", "study"];
let chore = toDo3.pop();
console.log(chore);

//length 
const tasks = ["dishes", "windows", "valcuum"];
console.log(tasks.length); // = 3

const tasks2 = ["Shower", "Wash clothes", "clean room"];
if (tasks2.length > 0) { // we can use the length of an array to create conditional statments that depend on its number of elements
    console.log("ugh , more work!")
}

//EX:1
const family = ["Fred", "Ana", "Sam"];
for (let i = 0; i < family.length; i++) { // We can also use the length of an array to create for loops that go through all of its elements. Excute the for loop three times by specifying that i needs to be less than 
    console.log(family[i]);
    //DISPLAYS: Fred Ana Sam
}
console.log("**SPACE**")
//EX:2
const peopleNames = ["John", "Adam", "Sarah"];
function printEachName(peopleNames) {
    for (let i = 0; i < peopleNames.length; i++) {
        console.log(peopleNames[i]);
    }
}
printEachName(peopleNames);


//params
console.log("v***Params***v")
function greet(name) { // To pass a value to a function, we first add a variable called parameter inside the paraentheses of the function
    console.log("Hello, " + name);
}
greet("Ben");



// Return
function userAge(number) {
    const age = "User Age: " + number;
    return age; // A function can return any type of value, like a string, number, or boolean.
}

const outcome = userAge(29);
console.log(outcome); // We can store the outcome value in a variable too. Here we store the return value in outcome and display it in the console
// Return 2
function userAge2(number2) {
    const age2 = "User age: " + number2;
    return age2;
}
console.log(userAge2(27)); // We can use the return value of a function like any value by calling the function. 

console.log("*Greeting The User*")
    function addGreeting(user) {
        const greeting = "Greetings " + user;
        return greeting;
    }
    const result = addGreeting("Soirse");
    console.log(result)

function displayCash(amount) { //Add a display statement and directly display the return value of displayCash()
    return amount + " Rubles";
}
console.log(displayCash(500)); // 500 Rubles

//Return a single value from this function
function lessThanFive(number3) {
    const lessThan = number3 < 5;
    return lessThan;
}
const results = lessThanFive(10);
console.log(results)

function checkPoints() { 
    const points = 7;
    const required = 10;
    console.log("Requirement reached");
    console.log(points > required)
}
checkPoints();

//Multiple Params. Functions need Multiple parameters to work with two or more places of data, like a first and last name.
    function displayName(firstName, LastName) {
        console.log(firstName + " " + LastName)
    }
    displayName("Ben", "Batres"); //Passing mutiple values to the fuinction works the same way, we add a comma "," followed by the second value. 
    function displayWinners(first, second) {
        console.log("1st: " + first)
        console.log("2nd: " + second)
    }
    displayWinners("Amy", "Sam")
// END OF MULTIPLE EXAMPLES

//UNDERSTANDING FUNCTIONS 
    // Functions names should be descriptive and should be indicate the main purpose of the function. 
    function display(word) { // This function displays something in the console.
        console.log(word);
    }
    display("Hi");
    display("Bye");
    function displayUserID(user) {
        console.log(user[1]);
    }
    const user = ["Don Quixote", 922];
    displayUserID(user);
    // Function are actions, so their names should contain at least one verb. When using mutiple words, the verb is a prefix, like sumTotal 
    function sumTotal(price, tax) {
        console.log(price + tax);
    }
    sumTotal(1000, 250);
    //Functions that mainly return a value without changing it in any start with verbs like get
    function getName(fullName) {
        return fullName;
    }
    const fullName = ["Don", "Juan"];
    const firstName = getName(fullName);
    console.log(firstName);
    // As a special case, functions that return boolean values often start with is.
    function isFreezing(temperature) {
        return temperature < 0;
    }
    const freezing = isFreezing(-3);
    console.log(freezing);
    // Functions name should be consistent. If one fucntion is called calculateDifference, a similar function should have the same verb prefix.
    function calculateSum(a,b) {
        return a + b;
    }
    function calculateDifference(a, b) {
        return a - b;
    }
    const sum = calculateSum(30, 11);
    const difference = calculateDifference(30, 11);
    console.log(sum);
    console.log(difference);
//END OF UNDERSTANDING FUNCTIONS 

// FUNCTIONS AS BLACK BOXES
    // A function is like a black box because with a great name we can call a function without reading the code defined inside it.
    
// END OF FUNCTIONS AS BLACK BOXES

// FUNCTION WITH ARRAYS
    function displayNames(names) {
        console.log(names);
    }
    const students = ["Laurel", "Yanni"];
    displayNames(students);
//All EXAMPLES
    function addTen(number) {
        const addedTen = 10 + number;
        return addedTen;
    }
    console.log(addTen(20));

    function printMag(first, secound, third) {
        console.log(first + " " + secound + " " + third);
    }
    const resultMag = printMag("Hello World");

    function mashWords(first, second, third, fourth) {
        return first + second + third + fourth;
    }
    const resultMashWords = mashWords("The", "Big", "Bad", "Wolf");
    console.log(resultMashWords);

    function numSum(one, two) {
        let sum = one + two;
        console.log(one + " + " + two + " = " + sum);
    }
    numSum(1,2);

    function printNumbers(arrayNumbers) {
        console.log(arrayNumbers);
    }
    printNumbers([1,2,3])
// END OF All EXAMPLES

//LOOPING OVER ARRAYS
    const grades = [91, 66, 77, 84, 66];
    const search = 66;
    function searchGrades(grades, search) {
        for (let i = 0; i < grades.length; i++)
        {
            if (grades[i] === search) {
                console.log("The grade exsits!");
                break;
            }
        }
    }
    searchGrades(grades, search);

    const languages = ["JavaScript", "C++", "Python"];

    function findLanguages(languages, language) {
        for (let i = 0; i < languages.length; i++) {
            if (languages === "JavaScript") {
                console.log(language + "found!");
                break;
            } else {
                console.log(language + " does not exist or been found yet!.")
            }
        }
    }
    findLanguages(languages, "JavaScript");

    // TEST EXAMPLE
    const prices = [100, 150, 200];
    const discounts = [0.1, 0.2, .25];

    function getValues(prices, discounts) {
        let values = [];
        for (let i = 0; i < prices.length; i++) {
            values[i] = prices[i] * discounts[i];
        }
        console.log(values);
    } 
    getValues(prices, discounts);

    // EX:
    const shopPrices = [99, 129, 149];
    const shopDiscounts = [.1, .2, .25];

    function searchDiscount(shopPrices, shopDiscounts) {
        console.log(shopPrices);
        console.log(shopDiscounts);
    }
    searchDiscount(shopPrices, shopDiscounts);

    // To perform a specific operation to array elements pass storePrices and storeDiscount to applyDiscount().
    const storePrices = [100, 169, 420];
    const storeDiscount = 0.1;

    function applyDiscount(storePrices, storeDiscount) {
        for (let i = 0; i < storePrices.length; i++) {
            console.log(storePrices[i] * storeDiscount);
        }
    }
    applyDiscount(storePrices, storeDiscount)

    

// To access array elements using the searchGrade function, pass the grades array when calling the function.
const grades5 = [92, 66, 77, 84];
function searchGrade2(grades5) {
    console.log(grades5);
}
searchGrades(grades5);

// Array.map()
    // If we wanted to modify each element in an array and store the result in a new array, how could we do it? One way of doing it is to use a loop to convert values before storing them. This works, but JavaScript has an even better solution.
    // v*v*v SOLUTOIN 1 v*v*v
    // const fehrenheit = [72, 68, 70, 74, 77, 75, 79];
    // const celsius = [];
    // for (const element of fehrenheit) {
    //     let c = (element - 32) * (5/9);
    //     celsius.push(c);
    // }
    // console.log(celsius);

    const fehrenheit = [72, 68, 70, 74, 77, 75, 79];
    const celsius = fehrenheit.map(function(element) { 
        return (element - 32) * (5/9);
        // To remember what is element: 72 - 32 
    });
    console.log(celsius);

    const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
    const celsius2 = fahrenheit.map(function(){}); // To tell map() how to modify each element, we need to pass a functiun as a parameter.
    console.log(celsius2);

    const vals = [56, 27, 19, 20, 38];
    const evenOrOdd = vals.map(function(element) {
        return (element % 2) == 0;
    });
    console.log(evenOrOdd);

    const queue = ["Sarah", " Hank", "Anna", "Beatrice"];
    const displayQueue = queue.map(function(element, index) {
        return index + ": " + element;
    });
    console.log(displayQueue);

    //Upper case the elements in the array
    const states = ["ak", "md", "va", "ca"];
    const upppercaseStates = states.map((element) => element.toUpperCase());
    console.log(upppercaseStates);

    // Displays the length of the elements
    const friendsNames = ["lisa", 'jim', 'hannah', 'frank'];
    const nameLength = friendsNames.map(function(element) {
        return element.length;
    });
    console.log(nameLength);
// END OF ARRAY .MAP()

// FILTER VALUES
    // One way of filtering 
    const testScores = [72, 95, 90, 71, 75, 79];
    const arr = [];
    for (const element of testScores) {
        if (element >= 90) {
            arr.push(element);
        }
    }
    console.log(arr);

    const examScores = [72, 95, 90, 71, 75, 79];
    //const array = examScores.filter(); The .filter() function creates a new array with values that satisfy a condition. EX: ArrayName.filter()
    // To tell the .filter() function whether to include or exclude a value in the new array, we need to pass a function as a parameter
    const array = examScores.filter(function(){});
    console.log(array);

    // Find participants that start with an S
    const participants = ["Ben", "Sarah", "Eli", "Henry", "Sean", "Annabel"];
    const sNames = participants.filter(function(element) {
        return element[0] === "S";
        // Another EX: element[1] === "e";
    });
    console.log(sNames);

    // Second way of filtering 
    const testScores2 = [72, 95, 90, 71, 75, 79];
    const arr2 = testScores2.filter(function(element) {
        return element >= 90;
    });
    console.log(arr2);

    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const workWeek = week.filter(function(element, index) {
        return (index > 0 && index < 6);
        // Sunday index is 0 so 0 is not greater than 0 and Saturday index is 6 so is not greater than 6
    });
    console.log(workWeek);
// END OF FILTER

// Array.reduce()
    //One way of the function
    const miles = [33, 95, 79];
    let total = 0;
    for (const element of miles) {
        total += element;
    }
    console.log(total);

    const miles2 = [33, 79, 95];
    // const total2 = miles2.reduce(function(){}); 
    const total2 = miles2.reduce(function(prev, curr) { // The fucntion needs two parameters: the first to access the result of the previous REDUCTION, and the second to access the CURRENT value
        return prev + curr;// reduce itertes through an array and, at each value, performs an operation with the two parameters until it arrives at a single value.
    }); 
    console.log(total2);

    // Simpfied way
    const miles3 = [33, 70, 90];
    const total3 = miles3.reduce((prevVal, currVal) => prevVal + currVal);
    console.log(total3);

    // A third parameter
    const salePrices = [17.50, 20, 23.75, 13.50, 8.50];
    const discountFactor = [0.9, 0.9, 1.0, 1.0, 0.9];
    const sumCost = salePrices.reduce(function(prevVal, currVal, index) {
        return prevVal + (currVal * discountFactor[index]);
    });
    console.log(sumCost);
    



