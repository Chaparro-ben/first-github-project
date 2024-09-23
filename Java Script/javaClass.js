class Book {
    constructor(author, title) { // To create new objects classes need a special methoid callde the constructor(). This method sets the property values for a new object.
        this.author = author;
        this.title = title;
        // we add the this kewword to refer to the object being created
    }
}
const book1 = new Book("Leo Tolstoy", "War and Peace");
const book2 = new Book("Dr Seuss", "Oh, the places You'll Go!");
console.log(book1);
console.log(book2);


// Methods
// Adding a method in a class is like creating a regular function except there's no need for the function keyword  
class VirtualPet {
    constructor(name) {
        this.name = name;
    }
    eat(food) { // Parameters allow class methods to be more interactive by reacting to things we give them.
        if (food === "treats") { // with a conditonal statement the object we create will be able to react to the type of food we pass to eat()
            console.log("nom nom")
        } else {
            console.log("discard")
        }
        
    }
}
// Before we can use the eat() method we need to create a new object from the class
const pet = new VirtualPet("Tom");
pet.eat("treats"); // To use the eat() method we'll need the same of the object a period the name of the method and parentheses
// ^^ Each new object of the VirtualPet class we create will be able to use the eat() method.


// Instance
// Every time we create an object from a class we're creating what's called an instance of that class.
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
    }
}
const user1 = new User("Arya"); // This is called an instance.
user1.isOnline = false; // Changing an instance also doesn't affect any other instances.  
const user2 = new User("Bran"); // Each instance is independent. That means when we create a new instance it doesn't affect any other instances. 
const user3 = new User("Sansa"); 
const user4 = new User("Jon"); 
console.log(user1);
console.log(user2);
console.log(user3); // Beacuse instances are independent they let us keep track of complicated data like huge number of users on a website
console.log(user4);

class Users {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
        this.status = "Hay, I'm using Mimo"; // Chaning a class affects all instances of that class. 
    }
    // constructor() {} The constructor is what creates an instance. But it doesn't always need to have properties inside of it. It works even when empty constructor when we run the code
    // sayHi() { console.log("hello")} 
    sayHi() {
        console.log("Hi, I'm " + this.name); // When changing a class, we can change both its properties and its methods.
    }
}
const users1 = new Users("Brian");
const users2 = new Users("Ana ");
console.log(users2.status); // Add a status property so that all users hava a shirt status description from now on.
users1.sayHi(); 
users2.sayHi();


// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {} // To inherit features from a class we need to use the extends keyword in the class definiton. By coding extends, we'll make the Dog class inherit from the Animal class.
// ^^ Since Dog inherhits from Animal, it's a subclass of the Animal class. The Animal class, then, is its superclass.
const dog = new Dog("Pug"); // Inheritance gives a class all the properties and methods of the class it's extending or inheriting from.
console.log(dog);
console.log(dog.name); // if a subclass doesn't have a constructor() method, the superclass' constructor becomes the default constructor. 

class Animal2 {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating")
    }
}
// We can create as many subclasses of Animal as we want. They'll all have access to the properties of the Animal class
class Dog2 extends Animal2 {
    bark() { // Inheritance becomes useful when subclasses have addional functionality like their own.
        console.log("Woof")
    }
}
class Bird extends Animal2 {}
const dog2 = new Dog2("Chocolate Lab");
const bird = new Dog2("Blue Jay");
dog2.eat(); // A subclass also inherits its superclass' methods.
bird.eat(); 
dog2.bark();


// Test Example
class Playlist {
    constructor() {
        this.song = [];
    }
    addSong(song) {
        this.song.push(song)
    }
    play() {
        for (let i = 0; i < this.addSong.length; i++) {
            console.log(this.song[i])
            
        }
    }
    remove() {
        this.song.pop();
    }
}
const myPlaylist = new Playlist();
myPlaylist.addSong("Alright"); // This gets pushed into the array.
myPlaylist.play(); // This displays the song

// Examples
class Info {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    sayHello() {
        console.log("Hello " + this.name + "!" + " You are " + this.age + " years old and your job is a " + this.job)
    }
}
const name1 = new Info("Ben", 19, "Cook");
console.log(name1)
name1.sayHello()

//Examples
class FavSongs {
    constructor() {
        this.song = [];
    }
    addSong1(song) {
        this.song.push(song);
    }
    songName() {
        for (let i = 0; i < this.song.length; i++) {
            console.log(this.song[i]);
        }
    }
}
const myFavSongs = new FavSongs();
myFavSongs.addSong1("Die With a Smile");
myFavSongs.addSong1("Circle");
myFavSongs.songName();
