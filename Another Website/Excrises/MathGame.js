let operators = ["+", "-","*"];
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const errorMessage = document.getElementById("error-msg");
let answerValue;
let operatorQuestion;

//Random Value generator
const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const questionGenerator = () => {
    //Two random values between 1 and 20
    let [num1, num2] = [randomValue(1, 20),randomValue(1, 20)];
    
    //for getting random operator
    let randomOperator = operators[Math.floor(Math.random() * operators.length)];
    
    if(randomOperator == "-" && num2 > num1){
        [num1, num2] = [num2, num1];
    }

    //solve question
    let solution = eval(`${num1}${randomOperator}${num2}`);

    //for placing the inpiut at random position
    //(1 for num1, 2 for num2, 3 for operator,anyting else(4) for solution)
    let randomVar = randomValue(1, 5);
    
    if(randomVar == 1) {
        answerValue = num1;
        question.innerHTML = `<input type="number" id="inputValue" placeholder="?"/>${randomOperator} ${num2}=${solution}`;
    }else if(randomVar == 2) {
        answerValue = num2;
        question.innerHTML = `${num1}${randomOperator} <input type="number" id="inputValue" placeholder="?"/>=${solution}`;
    }else if(randomVar = 3){
    answerValue = randomOperator;
    operatorQuestion = true;
    question.innerHTML = `${num1}<input type="text" id="inputValue" placeholder="?"/>= ${num2}=${solution}`;
    }else{
    answerValue = solution;
    question.innerHTML = `${num1}${randomOperator} ${num2}= <input type="number" id="inputValue" placeholder="?"/>`
    }

    //user input check
    submitBtn.addEventListener("click", () => {
        errorMessage.classList.add("hide");
        let userInput = document.getElementById("inputValue").value;
        //if user input is not empty 
        if (userInput){
            //if the user guessed correct answer
            if(userInput == answerValue){
                stopGame('Way a Go!!<span>Correct</span>Answer')
            }
            //if user inputs operator other than +,-*
            else if(operatorQuestion && !operators.includes(userInput)){
                errorMessage.classList.remove("hide");
                errorMessage.innerHTML = "Please enter a vaild operator"
            }
            //if user gussed wrong
            else{
                stopGame(`Opps!! <span>Wrong</span> Answer`)
            }
            //if input is empty
        }
        else{
            errorMessage.classList.remove("hide");
            errorMessage.innerHTML = "Input Cannot Be Empty"
        }
        
    })
};

//start Game
startBtn.addEventListener("click", () => {
    operatorQuestion = false;
    answerValue = "";
    errorMessage.innerHTML = "";
    errorMessage.classList.add("hide");
    //controls and buttons
    controls.classList.add("hide");
    startBtn.classList.add("hide");
    questionGenerator();
});

const stopGame = (resultText) => {
    result.innerHTML = resultText;
    startBtn.innerText = "Restart";
    controls.classList.remove("hide");
    startBtn.classList.remove("hide");
};