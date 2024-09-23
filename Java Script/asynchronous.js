function asyncExample() {
    console.log("We're calculating the first 10,000 prime numbers.");
    const asyncArr = [2];
    let AsyncNumber = 3;
    while (asyncArr.length < 10000) {
        for (let i = 2; i < AsyncNumber; i++) {
            if (AsyncNumber % i === 0) {
                AsyncNumber++;
                break;
            }
            if (i === AsyncNumber - 1) {
                asyncArr.push(AsyncNumber);
                AsyncNumber++;
                break;
            }
        }
    }
    return Promise.resolve(asyncArr);
}
asyncExample().then(function(value) {
    console.log(`We're calculated the first ${value.length} prime numbers`)
})
console.log("This line is printed during the calculation"); // Here we see the message show before the calculation has finished.
// Asynchronous code doesn't wait for the previous instruction to finish.


function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!")
}
greet("Ben", sayGoodbye);

// Let's call the function doSomeMath with the input parameter set to 2 and the callback parameter set to multiplyCallback
function mulitpleCallBack(num) {
    const result = num * 2;
    console.log(`The input doubled is equal to ${result}`);
}

function doSomeMath(input, callback) {
    console.log("We are doubling the input number.");
    callback(input);
}
doSomeMath(2, mulitpleCallBack);


function callbackFunc() {
    console.log("Excuted last because we're using asychronous code.")
}

// JavaScript has some native methods that execute code asynchronously, such as setTimeout() and setInerval()
console.log("Execute First");
setTimeout(() => { // The console output from the setTimeout method will show last because of the delay in the setTimeout method
    console.log("Execute Last")
},2000); // The delay in the parameter in the time, in milisecounds, that passes before the function or code block executes
console.log("Execute Secound");

// Settimeout() is always asynchronous even if the delay parameter is omitted or we set it as 0.
console.log("Execute First");
setTimeout(() => {
    console.log("Execute last, even if we set 0 secounds")
}, 0); // With a delay of 0, the code after the setTimeout() method executes immadiately, but the callback method function is executed as soon as possible
console.log("Exectue secound");

// settimeout() executes the callback after the specified delay.
function callback() {
    console.log("Executed last because of setTimeout")
}
console.log("Executed first");
setTimeout(callback,2000);
console.log("Execute second");

// SetInterval() is another native javaScript method that executes code asynchronously. With setInterval we can execute some code every set period of time. 
let blinkerO = false; 
const toogleBlinker = () => { // setInterval() takes a callback function and an interval as paramters.
    if(blinkerO) {
        console.log("Blinker off");
        blinkerO = false;
    } else {
        console.log("Blinker on");
        blinkerO = true;
    }
};
// setInterval(toogleBlinker, 1000); setIntveralexecutes the callback function forever, with a delay of the specifed number of milisecounds we pass as the secound parameter.

// To stop setInterval() from running indefinitely we can use the clearInterval
let blinkerOn = false;
let blinkerInterval = setInterval(() => {
    if(blinkerOn) {
        console.log("Blinker off");
        blinkerOn = false;
    } else {
        console.log("Blinker on");
        blinkerOn = true;
    }
}, 500);
setTimeout(() => { // we can save the setInterval in a blinkerInterval variable. Then use clearInterval(blinkerInterval) inside a setTimeout() to be executed after 2500 milisecounds.
    clearInterval(blinkerInterval); // The clearInterval() method take sthe blinkerInterval as its sole paramter. On executeion, it stops the repeating action of the setInterval() method
    console.log("STOP")
}, 2500);

//Countdown
let countDown = 3; 
const countdownInterval = setInterval(() => {
    if(countDown > 0) {
        console.log(countDown);
    }
    countDown--;
    if(countDown < 0) {
        clearInterval(countdownInterval);
        console.log("GO");
    }
}, 1000);

// Test example
function callback2() {
    console.log("New Message")
}
const intervalID = setInterval(callback2,500);
setTimeout(() => {
    clearInterval(intervalID)
}, 1500);

