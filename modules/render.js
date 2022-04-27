import todos from './data.js';

const todosList = document.querySelector('.todos-list');

const render = () => {
  todosList.innerHTML = null;

  for (let i = 0; i < todos.length; i += 1) {
    const todo = document.createElement('div');
    todo.className = 'todo';
    todo.innerHTML = `<div class="todo-check-desc">
    <input class="todo-check" type="checkbox" name="todo-check">
    <p class="todo-desc">${todos[i].description}</p>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>`;

    todosList.append(todo);
  }
};

export default render;
