const cart = document.getElementById('cart');

function addToCart (emotion){
    const cartItem = document.createElement('div');
    cartItem.innerText = emotion;
    cart.appendChild(cartItem);
}
function clearCart(){
    cart.innerHTML = ('');
};

// let button = document.createElement('button');
// button.innerText = 'Click me';
// document.body.appendChild(button)

// // document.title = "Java script "

// let todo1 = "Get groceries"
// let todo2 = "Wash car"
// let todo3 = "Study"

// let element = document.createElement('div');
// element.innerText = todo3;
// document.body.appendChild(element);

// let element = document.createElement('div');
// element.innerText = todo2;
// document.body.appendChild(element);

// let element = document.createElement('div');
// element.innerText = todo1;
// document.body.appendChild(element);

// let todo = {
//     name: 'Apple',
//     price: 3
// };

// todo.price;
// todo['price'];

// let prop = 'price';
// todo[prop];

let total = 0;

function createCart(foodPrices) {
  const foods = Object.keys(foodPrices);

  foods.forEach(function (food) {
    const cartItem = document.createElement('div');

    // Here we get the food price using the food variable.
    // If food = 'Apple', then foodPrices[food] is the same
    // as foodPrices['Apple'], which is the same as foodPrices.Apple
    const foodPrice = foodPrices[food];
    cartItem.innerText = food + ' $' + foodPrice;

    const addButton = document.createElement('button');
    addButton.innerText = 'Add';

    // You'll have to use a function without a name here. If you
    // create a separate addToCart() function, it will not have
    // access to any of the variables in this function.
    addButton.onclick = function () {
      total = total + foodPrice;
    };

    cartItem.appendChild(addButton);

    // This wil render each food with an "Add" button onto the webpage.
    document.body.appendChild(cartItem);
  });
}

createCart({ Apple: 3, Orange: 4, Egg: 2 });

 // Model
 let todos = [{
  title: 'Get groceries',
  dueDate: '2021-10-04',
  id: 'id1'
}, {
  title: 'Wash car',
  dueDate: '2021-02-03',
  id: 'id2'
}, {
  title: 'Make dinner',
  dueDate: '2021-03-04',
  id: 'id3'
}];


      // Creates a todo
      function createTodo(title, dueDate) {
        const id = '' + new Date().getTime();

        todos.push({
          title: title,
          dueDate: dueDate,
          id: id
        });
      }
// Deletes a todo
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    // If the id of this todo matches idToDelete, return false
    // For everything else, return true
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });
}

// Controller
function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  createTodo(title, dueDate);
  render();
}

function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);
  render();
}

// View
function render() {
  // reset our list
  document.getElementById('todo-list').innerHTML = '';

  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: 12px';
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
  });
}

render();


