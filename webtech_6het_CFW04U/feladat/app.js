const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
    const taskText = inputField.value.trim();

    if (taskText !== '') {
        
        const newListItem = document.createElement('li');
        newListItem.textContent = taskText;

        newListItem.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        todoList.appendChild(newListItem);

        inputField.value = '';
        inputField.focus();
    } else {
        alert('Kérlek, írj be egy teendőt!');
    }
});