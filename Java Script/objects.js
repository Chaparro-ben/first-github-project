var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

userOne.login();
userOne.logout();

const person = {
    name: "Joe Exotic",
    nickname: "Tiger King",
    ouccupation: "Zookeeper",
    age: 57,
};
person.nickname = "Big Tiger"; //To update the property value
console.log(person.nickname); //To access an object

const dog = {
    name: "Bo",
    bark: function(){
        console.log("Woof woof")
    }
};
dog.bark(); //We call these methods with the object name\

var puppy = {
    name: "Pup",
    bark: function(word) {
        return "woof woof, " + word;
    }
}
console.log(puppy.bark("hungry"));

const myCereal = {
    name: "Trix",
    display: function() {
        console.log(this); // The keyword "this" refers to the object that contains the method. 
//      console.log(this.name); We can use this follwed by a . to get the object's properties from inside its methods; OUTPUT: Trix
    }
}
myCereal.display();

const myFavCereal = {
    name: "Cinnamon Toast",
    changeAndDisplay: function() {
    this.name = "Cap'n Crunch";
    console.log(this.name);
    }
};
console.log(myFavCereal.name);
myFavCereal.changeAndDisplay();

// JSON stand for JavaScript Object Notation. It's used to format dta to exchange data between web applications and severs.
// const jsonVariable = '{}'; To create the object
const jsonString = '{"Story": "life", "times": 2, "fiction": true}'; // A JSOn object contains  a collection of key-value pairs. JSON objects can gather static data like numbers, arrays, booleans, or strings. Not fucntions

const concert = {
    band: "Super Carrots",
    music: "Indie"
};
console.log(concert);
console.log(JSON.stringify(concert)); //We can convert a JS object to a JSON with the JSON.stringify() method

const perro = '{"name": "Rocko", "age": 3}';// We can also transform a JSON string into a JS Object with JSON.parse() method
console.log(JSON.parse(perro)); // If we include perro in the paretheses, we'll transform the JSON string into a JS object

const brochure = '{"title": "Summer Vaction", "desintation": "France"}';
const parseBrochure = JSON.parse(brochure);
console.log(brochure);


// TEST EXAMPLE!
const tajMahalJSON = `{ " cuisine": "Indian", "takeout": false, "starRating": 4.5}`

var surname = "Smit"; // Var can be declared multiple times, while let and const can't
var surname = "Sit";
console.log(surname);

// We can update "LET" or "VAR" variables with assign = operator. But we can't change "CONST" variables const is short for "constant"
//EX: 
// const piNumber = 3.1416;
// piNumber = 90;
// console.log(piNumber)

var lotteryNumbers;
lotteryNumbers = [20, 34, 646, 69];
console.log(lotteryNumbers)

//SCOPES. Local or function scope refers to the part of code inside a function.
    // Here country is a local variable that we can access only inside of the vistCountry function
    function visitCountry() {
        const country = "argentina";
        console.log(country)
    }
    visitCountry();

    //Trying to acess a local variable from outside the function will produce an error.
    //Here, myDiary is private, so we can't access it from outside the function. Let's try to see what gets displayed.
    // function realDiary() {
    //     const myDiary = "Dear diary, today...";
    // }
    // console.log(myDiary);

    //GOBAL
    // The space outside a function is called gobal scope. You can think of it as the code between functions.
    // If we declare cityToVisit in the global scope, we can access it from anywhere in the code, including inside the travel function
    let cityToVisit = "Wasco";
    function travel() {
        console.log("Let's go to " + cityToVisit)
    }
    travel();
    console.log(cityToVisit);

    // Block scope
    // The last scope type is called block scope. It's the part of our code in between in the braces ({}) that belong to loops or conditionals.
    if(10 === 10) {
        console.log("This space here is block scope");
    }

    // Block scope is also useful in limiting where we use certain variables. It's really helpful in preventing unwanted side affects or erros.
    // Here, we can only use the index variable in the loop. After the loop finishes index is no longer available
    // for (let index = 1; index <= 3; index++) {
    //     console.log("Let's count to three");
    // }
    // console.log(index)

// Arrow function
    // Arrow functions are part of the ES6 JavaScript standard and are used to write cleaner and shorter code.
    function getGreeting() {
        return 'Hello';
    }
    const greeting = () => { // Arrow function are a type of anonymous function, meaning that they don't have a function name. with arrow functions we dont need the function keyword or the function name.
        return 'Hi'
    }; // If we want to call these function, we need to store them inside a variable and call the variable with parentheses at the end 
    console.log(getGreeting());
    console.log(greeting());

    function getGreeting2(firstName) {
        return 'Greetings ' + firstName;
    }
    const greeting2 = (firstName) => {
        return 'Greetings, ' + firstName;
    };
    console.log(greeting2('Ben'));

    // Right after the parenthese and before the opening curly braces is where we add the arrow operator =>. We use this operator rigth before the code or expression we want the function to execute.
    const hello = function myFunction() {
        return 'Greetings!';
    };
    const helloArrowFunction = () => {
        return 'Greetings ';
    };
    console.log(hello());
    console.log(helloArrowFunction());

    //Just like with tradional functions, we use curly braces {} to contain an arrow function's code block.
    const greetings = () => {
        const name = 'Elizabeth';
        return 'Greetings ' + name;
    }
    console.log(greetings());

    // Multiline function. The arrow function stores two messages and return the concatenated strings.
    const challengeGreeting = () => {
        const generalMessage = "Hello! Welcome Home.";
        const seasonalMessage = "Happy to see you!";
        return generalMessage + " " + seasonalMessage;
    }
    console.log(challengeGreeting())

    // If an arrow fucntion only have one statment, we can leave out both the curly braces and the return keyword to get some very short code
    // const greeting = () => 'Greetings!';

    // const getPrice = (discount) => 500 - .25 * 500
    const getPrice = discount => 500 - (discount) * 500;
    console.log(getPrice(0.25));

    const getPrice2 = total => {
        const discount = 0.10;
        return total - (discount * total);
    };
    console.log(getPrice);
//  console.log(getPrice()); If a function call doesn't pass a value, the function will use undefined as the value. 

    // To avoid undefined values, we specify the defualt value inside the parentheses.
    const getPrice3 = (total = 200) => {
        const discount = 0.16;
        return total - (discount * total);
    };
    console.log(getPrice3());

    // To use multiple parameters, we add the new parameter in the parenthesis and separate it from the rest by adding a comma , .
    const getPrice4 = (total = 200, discount = 3) => total - (discount / 100 * total);
    console.log(getPrice4());

    // Arrow function let us have more compact and concise code. How We write them depends on the parameters we use and the code block size.
    const getPrice5 = (total) => {
        const discount = 0.10;
        return total - (discount * total);
    };
    console.log(getPrice5(500));

// Template literals
    //Template literal makes it easy to add variables and expressions inside of string. 
    const fullName = "Helen McGuire";
    console.log("Hello " + fullName + "!");
    console.log(`Hello ${fullName}!`);

    // To easliy combine variables with string literals.
    const category = `pie`;
    const cake = `Apple ${category}`;
    console.log(cake);

    // We can also perform operations inside string literal by adding expressions inside the braces of ${}
    const quantity = 20;
    const price = 10;
    const cost = `Total cost : ${quantity * price}`;
    console.log(cost);

    // When calling a funtion, we leave out the parenthesis () if we're passing string lieral as an argument to the function.
    const sayHi = (person) => {
        return `Bonjour ${person}`;
    }
    console.log(sayHi`Ben`);

// Destructuring 

    const cars = ["Honda", "Volkswagen", "Bentley", "Cadillac", "Toyota", "Cherolet", "Nissan", "Kia" ];

    if(cars[1] === "Hyundai") {
        console.log(`The prettiest car is a Hyundai`);
    } else if (cars[0] === "Jeep") {
        console.log(`The prettiest car is Jeep`);
    } else {
        console.log(` ${cars[0]} cars are prettest car than ${cars[1]} cars. `)
    }

    // Destructing allows us to assign array items to variables to us eliek any other variable. It's the cleanest way to simpify our code.
    // We store new variables in [] and assign them to the original array cars.
    const cars2 = ["Honda", "Volkswagen", "Bentley", "Cadillac", "Toyota", "Cherolet", "Nissan", "Kia" ];
    const [firstCar, secoundCar] = cars;
    if(cars2[1] === "Hyundai") {
        console.log(`The prettiest car is a Hyundai`);
    } else if (cars2[0] === "Jeep") {
        console.log(`The prettiest car is Jeep`);
    } else {
        console.log(`${firstCar} cars are prettier than ${secoundCar} cars.`)
    };

    // The first element inside the [], companyName, corresponds to the first element in the array, Leo Pizza.
    // The second element inside the [], phone corresponds to the second element in the array, 19873456
    // The third element inside the [], phone corresponds to the third element in the array, 911 SW Main St, Bunkie
    const [companyName, phone, address] = [`Leo Pizza`, `19873456`, `911 SW Main St, Bunkie`];
    console.log(companyName);
    console.log(phone);
    console.log(address);

    // If we don't want to destructure every element in the array, we can save the rest in anyOtherVariable by using ... before anyOtherVairable
    const[companyName2, ... anyOtherVairable] = [`Leo Pizza`, `19873456`, `911 SW Main St, Bunkie` ];
    console.log(companyName2);
    console.log(anyOtherVairable);

    // The "," inside the [] skips variables in the destructing array's first and secound positions
    // We extract the third element
    const [,, address2] = [`Leo Pizza`, `19873456`, `911 SW Main St, Bunkie`];
    console.log(address2);

    // The three variables inside the {} correspond to the three values in the object.
    const userInofrmation = {
        firstName: "John",
        lastName: "Smith",
        age: 41,
    };
    const {
        firstName,
        lastName,
        age,
    } = userInofrmation;
    console.log(firstName, lastName, age);
    
    // We use the original property name, a colon, and a new name if we want to use variable names that differ from the object's properties
    const carInformation = {
        item1: "Mazda",
        item2: "cx30",
        item3: "Red",
    };
    const {
        item1: brand,
        item2: model,
        item3: color
    } = carInformation;
    console.log(brand, model, color);

    // To seprate the first and second values, and keep the rest of the object together, add ... and otherInfo after the first two properties
    const userInofrmation2 = {
        firstName1: "John",
        lastName2: "Smith",
        age1: 43,
        phoneNumber: `661289549`
    };
    const {
        firstName1,
        lastName2,
        ...otherInfo
    } = userInofrmation2;
    console.log(firstName1);
    console.log(lastName2);
    console.log(otherInfo);

    const smartTv = {
        type: "QLED",
        shape: "Flat",
        ports: "HDMI",
        connectivity: `wifi`
    };
    const {
        type: screenType,
        shape: screenShape,
    } = smartTv;
    console.log(screenType);
    console.log(screenShape);

    const aircrafts = {
        airBrand: `Boeing`,
        nose: `Pointed nose`,
        windshield: `V-shaped-windshield`,
        tail: `Sloped Tail`,
    };
    const {airBrand, nose, windshield, tail} = aircrafts;
    console.log(`The ${airBrand} Company was founded on July 15, 1916`);
    console.log(`This aircraft has a ${nose} and a ${windshield}`);
    console.log(`And at least but not last a ${tail}`);
