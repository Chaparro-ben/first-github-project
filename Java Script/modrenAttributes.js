// A more modern way of adding events to elements is with the addEventListener() method.
const item = document.querySelector("#item");
function changeColor() {
    item.classList.toggle("pink");
    item.removeEventListener("click", changeColor); // We can also remove events with the removeEventListener() method
}
item.addEventListener("click", changeColor); // Once we've added the method, we add the name of the event we want toi listen for, followed by a comma and the function we want to call

const boxWidth = document.querySelector("#box-width");
const el = document.querySelectorAll("#height-width");
const prompt = document.querySelector("#prompt")
function changeWidth() {
    boxWidth.classList.toggle("width");

}
function changeHeight() {
    boxWidth.classList.toggle("height");
}
el[0].addEventListener("click", changeHeight);

el[0].addEventListener("click", changeWidth);
el[1].addEventListener("click", changeHeight);
el[2].addEventListener("click", changeWidth);

//Touch. When we use touch events to determine whether a user has interacted with a webpage element and then use a function to perform a specific action
function displayMessage() {
    document.getElementById("message").innerHTML = "woff";
}
document.getElementById("dog").addEventListener("touchstart",displayMessage); //*touchstart* for mobile
function displaySecondMessage() {
    document.getElementById("touch-move").innerHTML = "ruff";
}
document.getElementById("dogs").addEventListener("touchmove",displaySecondMessage); 
//  when we want to determine whether a user has interacted with an element for a prolonged time, we use the touchmove event. 
function clearMessage() {
    document.getElementById("clear-message").innerHTML = "";
}
document.getElementById("kylie").addEventListener("touchend",clearMessage);
// To check whether a user has stopped interacting with an element, we use the touchend
function cancelMessage() {
    document.getElementById("cancel-message").innerHTML = "King Kylie was interrupted";
}
document.getElementById("kylie2").addEventListener("touchcancel",cancelMessage);
function clickMessage() {
    document.getElementById("cancel-message").innerHTML = "King Kylie";
}
document.getElementById("kylie2").addEventListener("touchstart",cancelMessage);