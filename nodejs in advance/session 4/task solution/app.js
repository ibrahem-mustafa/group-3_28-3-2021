// fetch todos

// take 10 todo from fetched todos and render it in the dom // DONE
// => take slice with length of 10 from fetched todos // DONE
// => create elements (li) and append each element to targeted dom element // DONE


// create input and button with an event listener
// => event is an click event on the button

// event is suppose to take input value and create a li with it
// => take input value
// => create element (li)
// => set text-content of tje li = input value
// => set attributes
// add li to the todos list
// => append (li) to the (ul)



// create function that creates elements and set it's attributes and content // DONE
// create function that renders element into the dom (includes set events and content) // DONE


const todoListContainer = document.getElementById('todoListContainer')

let todoList = todoListContainer.querySelector('ul.todoList')


if (!todoList) {
    todoList = createElement('ul', {class: 'todoList'});

    todoListContainer.appendChild(todoList);
}


(async function () {
    const response = await fetch("http://jsonplaceholder.typicode.com/todos/");
    const todos = await response.json()
    

    todos.slice(0, 10).forEach(todo => {
        renderTodo(todoList, todo);
    })

})()


const todoForm = document.getElementById('todoForm')
const input = todoForm.querySelector('input')
const button = todoForm.querySelector('button')


input.addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
        createTodo(todoList, input);
    }
})

button.addEventListener('click', () => {
    createTodo(todoList, input);
})


function createTodo(list, input) {
    if (!input.value.trim()) return;

    const todo = {
      id: new Date().getTime(),
      title: input.value,
    };

    renderTodo(list, todo);

    input.value = "";
    
}


function renderTodo(list, todo) {
    // create li element (with classes,id, and content)
    const li = createElement('li', { class: 'todoListItem', id: todo.id}, todo.title)
    // create button element that should be inside the (li) And Will Have A (click) Event 
    const button = createElement('button', {class: 'todoListItem_delete'}, 'X')

    button.addEventListener('click', () => {
        list.removeChild(li)
    })
    
    // append button to the li
    li.appendChild(button)

    // append the (li) to targeted (list (ul))
    list.appendChild(li)
}


function createElement(tag, attributes, content) {
    const ele = document.createElement(tag);

    const keys = Object.keys(attributes)
    keys.forEach(key => {
        ele.setAttribute(key, attributes[key])
    })

    if (content) {
        ele.textContent = content
    }

    return ele
}


