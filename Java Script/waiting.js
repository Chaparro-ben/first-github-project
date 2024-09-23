// JS Promises are objects that represent the outcome of an asynchrous operation.
// A JS promise is like a real-life promise. It can be fulfiled or rejected. When we're waiting to know the reult, the promise is pending.

// The passed-in function itself takes two paramters. The first is resolve and the secound is reject.
// When is a promise is fulfiled, we say the promise is resolved. When the promise fails, it's rejected
const promiseDemo = new Promise(function (resolve, reject) {
    
});

const dessertStock = {
    cheeseCake: 10,
    moltenCake: 7,
    spongeCake: 0
};

//The promise constructor passes its own resolve and reject functions into the constructor.

function orderCheeeseCake() {
    return new Promise(function(resolve, reject) {
        if (dessertStock.cheeseCake > 0) {
            resolve( // If the promise is fulfiled, the resolve function changes the promise status from pending to fulfiled. The resolve function takes one argument.
                "Cheesecake is available in the stock. Order has been processed."
            );
        } else {
            reject (
                "Sponge cake is sold out"
            )
        }
    })
}

//EXAMPLE 1
// const makeOrder = orderCheeeseCake();
// makeOrder.then(function (successValue) { // If a promise is fulfilled the .then method helps us handle the result of the promise. We use .then to include actions for when the promise is no longer in the pending state.
//     console.log(successValue);// we can use .then method on the returned promise object. The first paramater for the .then method is the successValue parameter. The successValue is the value returned when the promise resolves.
// });

// EXAMPLE 2
// To avoid overcomplicated code in promises we can create a function to handle the success value. 
function handleSuccess(successValue) {
    console.log(successValue)
}
const makeOrder = orderCheeeseCake()
makeOrder.then(handleSuccess); // And pass teh function to the .then method attached to the makeOrder variable

// Similar to the resolve function, the reject function takes one argument. This argument is generally a reason for the output rejection or an error
function orderSpongeCake() {
    return new Promise(function(resolve, reject) {
        if (dessertStock.spongeCake > 0) {
            resolve( // If the promise is fulfiled, the resolve function changes the promise status from pending to fulfiled. The resolve function takes one argument.
                "Sponge cake is available in the stock. Order has been processed."
            );
        } else {
            reject (
                "Sponge cake is sold out"
            )
        }
    })
}
function handleSuccess(successValue) {
    console.log(successValue)
}
function handleFailure(failureValue) {
    console.log(failureValue)
}
const makeSecoundOrder = orderSpongeCake();
makeSecoundOrder.then(handleSuccess).catch(handleFailure);// If the promise is not fulfilled, the .then method won't execute and we'll get uncaught error. To sort this out, we can use the .catch method to handle errors when the promise is rejected. 


// We can chain as many .then methods as we want. This allows us to process promise objects returned from other promise objects.
const dessertSecoundStock = {
    cheeseCake: {
        inStockAmount: 10,
        price: 5
    },
    spongeCake: {
        inStockAmount: 0,
        price: 7
    }
};
const budget = 10;

function isAvailable() {
    return new Promise(function(resolve, reject) {
        if (dessertSecoundStock.spongeCake.inStockAmount > 0) {
            resolve(true)
        } else {
            reject("The sponge is out of stock")
        }
    });
}

function checkPrice(productAvailable) {
    return new Promise(function(resolve, reject) {
        if (productAvailable && dessertSecoundStock.spongeCake.price <= budget) {
            resolve (
                "Reasonable price. Purchasing.."
        );
        } else {
            reject("Too expensive. Canceling the order..")
        }
    });
}

function handleAvailble(isAvailable) {
    return checkPrice(isAvailable);
}

function handleCheckPrice(successValue) {
    console.log(successValue)
}

function handleFail(failureValue) {
    console.log(failureValue)
}
const checkAvailablility = isAvailable(); // Here, we check if a chessecake is avaliable. If true we then check if the price is within the budget limits. The second promise checkPrice depends on the result value from the first promise.
checkAvailablility.then(handleAvailble).then(handleCheckPrice).catch(handleFail)
// The purpose of .then method is, it determines the next step on what to do with the return value of the promise object.
// The functionally of the .catch method is, it handles rejections or errors resulting from a promise.

// To inform JavaScript that we are writing asynchrous function we add the async keyword before the function keyword.
// Async functons always return promise objects.
async function asyncFunc() {
    console.log("I am an async function!")
}
asyncFunc();

// we use the await function keyword inside an async function. await waits for the promise to be resolved
let traditionalPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve (
        "This promise will always resolve after 2 secounds"
    )), 2000 
});

async function asyncFunction() {
    let value = await traditionalPromise; // Here, await pauses the execution of our async code inside the asyncFunction until traditionalPromise is resolved
    console.log(value)
}

asyncFunction();


// The async/await syntax allows us to have more readble code and is usually shorter than a traditional promise. 
    let beverages = ['tea', 'coffee', 'apple', 'cider'];

    function pickRandomBeverage() {
        return new Promise(function(resolve, reject)  {
            let randomIndex = Math.floor(Math.random() * beverages.length);
            let selectedBeverage = beverages[randomIndex];
            setTimeout(function()  {
                console.log(`${selectedBeverage} selected`)
                resolve(selectedBeverage)
            }, 1000);
        })
    }

    function checkIfHotWaterIsReady(isBeverageSelected) {
        return new Promise(function(resolve, reject)  {
            setTimeout(function() {
                if(isBeverageSelected) {
                    console.log("Preparing...");
                    resolve(isBeverageSelected);
                } else {
                    reject("No beverage has been picked up.")
                }
            }, 1000) 
        })
    }

    function prepareDrink(selectedBeverage) {
        return new Promise(function(resolve, reject)  {
            setTimeout(function() {
                if (selectedBeverage) {
                    console.log(`Enjoy your ${selectedBeverage} !`);
                    resolve(true);
                } else {
                    reject("Drink not ready yet...")
                }
            }, 1000)
        })
    }

    // We can make this code shoter and more readable with async/await syntax. Out code even looks similar to synchronous code.
    async function asyncAwaitPromiseHanding() {
        const pickedDrink = await pickRandomBeverage();
        const isHotWaterReady = await checkIfHotWaterIsReady(pickedDrink);
        const isDrinkPrepared = prepareDrink(isHotWaterReady);
        return isDrinkPrepared;
    }
    asyncAwaitPromiseHanding()

    // function nativePromiseHanding() {
    //     const pickedDrink = pickRandomBeverage();
    //     const handleWaterReadyCheck = function(selectedBeverage) {
    //         return checkIfHotWaterIsReady(selectedBeverage);
    //     };
    //     const handlePrepareDrink = function(isBeverageSelected) {
    //         return prepareDrink(isBeverageSelected);
    //     };
    //     pickedDrink.then(handleWaterReadyCheck).then(handlePrepareDrink)   
    // }
    // nativePromiseHanding()

const stock = {
    sunglasses: {quantity: 0, price: 29.99},
    bags: {quantity: 2, price: 109.89}
};
// to handle rejections, we can use the try-catch syntax. First, teh code tries to run and if it fails, the error is caught
const purchasePromise = new Promise(function(resolve, reject) {
    if (stock.sunglasses.quantity > 0) {
        resolve("Sunglasses are available. proceeding with order now.");
    } else {
        reject("Sunglasses are out of stock. Canceling Order.")
    }
});

async function orderSunglasses() {
    try {
        let result = await purchasePromise;
        console.log(result);
    } catch(error) {
        console.log(error)
    }
}
orderSunglasses()