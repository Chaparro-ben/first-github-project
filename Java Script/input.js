function search() {
    //** */ this gets the users input and display it
    // const searchWord = document.getElementById("searchInput").value;
    // document.getElementById("message").innerHTML = searchWord;**
}

function register() {
    const paragraph = document.querySelector("p");
    const username = document.getElementById("usernameInput").value;
    paragraph.innerHTML = username + ",you're signed in!";
}