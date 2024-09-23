function displayItem() {
    // Example *1
    // const el = document.getElementsByTagName("li"); //getElementsByTagName is used to get a collection of elements of the same *TAG* types
    // const div = document.querySelector("div");// this is where it displays the text
    // div.innerHTML = el.length; // get the length of the collection

    // const p = document.querySelector("p");
    // p.innerText = el[2].innerHTML; //array list

    //Example *2
    const el = document.getElementsByClassName("urgent"); // getElementsByClassName is used to get a collection that contains specific elements of the *CLASS* type.
    // to access mulitple elements that have more than one class, add a space between them. EX:("class1 class2")
    const p = document.querySelector("p");
    p.innerText = "You have " + el.length + " urgent tasks";
    p.innerText = el[1].innerHTML; //array list
};

const paragraph = document.createElement("p");
paragraph.innerHTML = "Wanna go to the movie?"

const image = document.createElement("img");

//Append Element
function showMessage() {
    let bodyElement = document.getElementById("parent");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Meg: Movie";
    bodyElement.appendChild(paragraph);
}

// Delete Element
const parentElement = document.getElementById("parent1");
const para = document.getElementById("child");
parentElement.removeChild(para); // Here we add para between the parenthese to remove it from parentElement.

// We can also get all the children nodes of a parent node with the .children property.
let listChildren = document.querySelector("ol").children;
let paragraph1 = document.querySelector("p");
// This gives us an array of the child nodes in order of appearance. Here we get the number of children in the list node.
paragraph1.innerHTML = listChildren.length;

// If we only want to access the first child node of a parent we can do so with .firstELementChild
let heading = document.body.firstElementChild;
heading.innerHTML = "Week 13";

//We can also access the nearest slibinbgs of an element node with .nextElementSiblings
let heading2 = document.querySelector("li");
let slibinbgElement = heading2.nextElementSibling;
slibinbgElement.innerHTML = "List deleted";

// Acess the last child of the main element to correct the typo.
// Let mainChildren = document.querySelector("main").children;
// let lastChild = mainChildren[mainChildren.length - 1];
// lastChild.innerHTML = "Book now your ticket";

const firstHeading = document.body.children[0];
firstHeading.innerHTML = "Track team";