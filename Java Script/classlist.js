function addBold() {
    const el = document.querySelector("p");
    el.classList.add("bold"); // Classes can also be removed from an element as well *remove()*
}

function addColor() {
    const el = document.querySelector("div");
    el.classList.toggle("text-color");
}

function changeAttribute() {
    const el = document.querySelector("img");
    el.src = "/About me/imgs/Linda-mujer.jpeg", "/About me/imgs/Mood.jpeg";
}

function changePhoto() {
    const el = document.querySelector(".img1");
    el.classList.toggle("")
}