console.log("We'er calculating the first 6000 prime numbers.");
console.log("Waiting...");
const arr = [2];
let number = 3;
while (arr.length < 6000) { // the length of the number determines how longer it takes to show the results
    for (let i = 2; i < number; i++) {
        if ( number % i === 0) {
            number++;
            break;
        }
        if (i === number - 1) {
            arr.push(number);
            number++;
            break;
        }
    } 
}
console.log(`We finshed calculating the first ${arr.length} prime numbers.`)
console.log("We had to wait for this line to print")
// In synchronous code , one line of code is exuted only after the previous one has finished. Synchronous code can slow down our programs. Here we have to wait for the calculation of 6000 prime numbers to get the last console output.

function add(number1, number2, callback) { // A callback function is a regular function that we pass into another function and then call to perform a task
    let result = number1 + number2;
    callback(result);
}

function logResult(result) { // Here we pass the logResult function to our add function to show the result of the calculation 
    console.log(`The result is: ${result}`);
}
add(2, 3, logResult);


const arrNumber = [1,2,3,4,5];
function callback(num) {
    return num * 2;
};
const newArray = arrNumber.map(callback); // Here we pass the callback function to the .map() array method. In it we return num multiplied by 2. The action repeats for all elements of the array.
console.log(newArray);
console.log("This code is synchronous"); // The .map() method is synchronous. it executes in its entirety before the next line of code runs.

const array = [1,2,3,4,5,6,7,8,9,10];

function callback1(num) {
    return num % 2 === 0;
}
const evenNumArray = array.filter(callback1); // Here we pass the callback function to the .filter() method to return all even numbers in the original array.
console.log(evenNumArray);
console.log("This code is synchronous")