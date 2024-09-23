// while (true) { (conditions)
//   console.log("And Again")  DON'T RUN THIS CODE
// }

while (false) {
    console.log("Echo")
}

let counter = 1;
while (counter < 4) {
    counter++;
    console.log(counter);
}

console.log("break");
let counter2 = 5;
while (counter2 < 10) {
    console.log(counter2)
    counter2++;
}

// Its stops the lopp 
let displayAd = true;
while (displayAd == true) {
    console.log("Sign up for free!");
    displayAd = false;
}

console.log("break");

// for loop
for (let i= 1; i < 5; i++) {
    console.log(i)
    console.log("For Loop")
}

const notifications = 4;
for (let i = 0; i < notifications; i++) {
    console.log("You've got mail!");
}

for (let i = 10; i > 0; i--) { // let i = # where it starts; i > # where it ends; 
    console.log(i)
}
for (let i = 30; i > 24; i--) {
    console.log(i)
}