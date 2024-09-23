function showAttribute() {
    const el = document.querySelector("img"); // the tags name 
    // const el = document.querySelector("a"); // the tags name
    const paragraph = document.querySelector("p");
    paragraph.innerText = el.src; // the source of the img and displays it
    // paragraph.innerText = el.href;  the href of the link and displays it 
}

function changeAttribute() {
    const el2 = document.querySelector(".img1"); 
    el2.src = "https://images.fitmentindustries.com/web-compressed/1340989-1-2019-civic-honda-type-r-swift-spec-r-lowering-springs-volk-te37sl-custom.jpg"; 
    //^^ We can update the src image by adding a new src.
}

function changeQuestionType() {
    const el3 = document.querySelector("input");
    el3.type = "checkbox";

    // You can also change the stylesheet 
    // const ex = document.querySelector("link");
    // ex.href = "style.css";

    // to access and display tag elemnts that have styles added to them, add ".style.color"
}

const prompt = document.querySelector("#prompt");
const el = document.querySelector(".button");

function publish() { // The functin calle after an event is triggered is referred to as an event handler
    prompt.innerText = "Website published";
}
el.onclick = publish;

const item = document.querySelector("#item");
function changeColor() {
    item.classList.toggle("pink");
}
item.onclick = changeColor;
// item.ondlclick = changeColor; 

const textArea = document.querySelector("#textarea");
function changeOnScroll() {
    textArea.style.backgroundColor = "red";
}
textArea.onscroll = changeOnScroll;

// If we want to trigger an event when an input field changes its value, we can use the onchange property.
const input = document.querySelector('#input');
const log = document.getElementById('log');
function updateValue() {
    log.innerText = input.value;
}
input.onchange = updateValue;

// If we want to trigger an event anytime an element's input changes, we use the oninput property
const userInput = document.querySelector("#user-input");
const logged = document.getElementById("logged");

function updateText() {
    logged.innerText = userInput.value.length + " Characters";
}
userInput.oninput = updateText;

const clickMe = document.querySelector("#click-me");
const phrase = document.querySelector("#phrase");
const phrase2 = document.querySelector("#phrase2");
function clicked() {
    phrase.innerText = "Button Clicked";
}
function secClick() {
    phrase2.innerText = "Clicked again"
}
clickMe.onclick = clicked;
clickMe.onclick = secClick;
