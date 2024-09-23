
//cannot be a reserved keyword
//should be meaningful
//cannot start with a number (1name)
//cannot contain a space or hyphen (-)
//are case-sensitive

// let name = 'Ben';//string literal
// let age = 17;// number literal
// let isApproved = false;//boolean literal
// let firstName = undefined;
// let selectedColor = null;

// let name = 'Ben';
// let age = 17;
// let person = {
//     name: 'Ben',
//     age: 17
// };
// //dot notation 
// person.name = 'john';

// //bracket notation
// let selection = 'name';
// person[selection] = 'mary';

// console.log(person.name);

// let selectedColors = ['red','blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);

//performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

//calculating a vaule 
function square(number) {
    return number * number;
}

console.log(square(2));