const inputElement = document.querySelector('input.newTaskAdd')
const addBtn = document.querySelector('button#newTaskBtn')

const tasks = document.querySelector('div.newTasks')


const handleAddTask = () => {
    const isValid = checkInput();

    if(!isValid) {
      return inputElement.classList.add("erro");
    };

    const newTasksItem = document.createElement('div');
    newTasksItem.classList.add('tasksItem');

    const text = document.createElement('p');
    text.innerText = inputElement.value;

    text.addEventListener('click', () => handleTextClick());

    const deleteItem = document.createElement('i');

    deleteItem.classList.add('fa-solid');
    deleteItem.classList.add('fa-trash');

    newTasksItem.addEventListener('click', () => handleDeleteClick());

    newTasksItem.appendChild(text);
    newTasksItem.appendChild(deleteItem);

    tasks.appendChild(newTasksItem)
    
    inputElement.value = "";
};

const handleTextClick = () => {
    const tasks = document.getElementsByClassName('tasksItem')

    for(let task of tasks) {
        task.firstChild.classList.add("completed")
    }
};

const handleDeleteClick = () => {
    const tasks = document.getElementsByClassName('tasksItem')

    for(let task of tasks) {    
        task.children[1].addEventListener("click", () => {
            task.remove()
        })
    }
};

const checkInput = () => inputElement.value.trim().length > 0;  // callbackFunction, retorna se a o valor recebido em 'inputElement', sem espaços com o 'trim()' é maior que 0. 

const handleAddTaskChange = () => {
    const isValid = checkInput();

    if (isValid) {
        return inputElement.classList.remove("erro");
    };
}; 

addBtn.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleAddTaskChange());