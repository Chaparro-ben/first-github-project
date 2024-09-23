let wallet = 3;
wallet = wallet; // self-assignment is when we set a variable to its own value. 
console.log(wallet);

let wallet2 = 3;
wallet2 = wallet2 + 1; // we can increase or decrease variables set to numbers
console.log(wallet2);

let wallet3 = 3;
wallet3 = wallet3 + 2;
wallet3 = wallet3 - 1;
console.log(wallet3); // Self-assignment variables let us track data that changes over time

let nameInfo = "Account name:";
nameInfo = nameInfo + " Elton";
nameInfo = nameInfo + " John";
console.log(nameInfo);

let likes = 5;
likes += 1; //or -= to decrease
console.log(likes);

let likes2 = 5;
likes2 ++;// increment operator
//likes 2 -- decrementoperator
console.log(likes2)

