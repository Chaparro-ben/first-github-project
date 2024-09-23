let isBatteryOn = true;
let isSwitchOn = true;
console.log(isBatteryOn && isSwitchOn); // the && operator will return false if one or more conditions are false 

//You can also store the result of a logical experssion in a variable
let isBatteryOn2 = false;
let isSwitchOn2 = false;
let result = isBatteryOn2 && isSwitchOn2;
console.log(result)

let cost = 50;
let sellPrice = 60;
const profit = sellPrice - cost;
console.log(profit); // profit = 10
const result2 = cost < sellPrice && profit > 0;
console.log("result: " + result2) // result: true

let isRecipientValid = true;
let isSubjectFilled  = false;
const result3 = isRecipientValid && isSubjectFilled;
console.log(result3)// false;