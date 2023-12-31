const todoList = JSON.parse(localStorage.getItem("todoList")) || [
    { name: "make dinner", dueDate: "2022-12-22" },
    { name: "wash dishes", dueDate: "2022-12-22" },
];

const l = JSON.stringify(todoList);
console.log(l);
console.log(JSON.parse(localStorage.getItem("todoList")));
// console.log(JSON.parse(l ));

renderTodoList();

function renderTodoList() {
    let todoListHTML = "";

    todoList.forEach((todo, index) => {
        const html = `
        <div>
        ${todo.name} 
        </div>
        <div>
            ${todo.dueDate} 
        </div>
        <button class="delete-btn js-delete-todo">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
    document
        .querySelectorAll(".js-delete-todo")
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                todoList.splice(index, 1);
                localStorage.setItem("todoList", JSON.stringify(todoList));
                renderTodoList();
            });
        });
}

document.querySelector(".js-add-todo").addEventListener("click", () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector(".js-name-input");
    const inputDateElement = document.querySelector(".js-date-input");

    todoList.push({
        name: inputElement.value,
        dueDate: inputDateElement.value,
    });
    inputElement.value = "";
    inputDateElement.value = "";
    localStorage.setItem("todoList", JSON.stringify(todoList));
    renderTodoList();
}

// for(let i=1;i<21;i++){
//     if (i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     }else if (i%5===0){
//         console.log("Buzz");
//     }else if (i%3===0){
//         console.log("Fizz");
//     }else{
//         console.log(i);
//     }
// }
