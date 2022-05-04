/*
 * @jest-environment jsdom
 */
import Todo from './todo.js';
import { render, clearCompletedBtn} from './render';

const todoObj = new Todo();
const htmlTemplate = `
<div class="todo-placeholder">
        <div class="list-header">
            <p>Today's To Do</p>
            <i class="fa-solid fa-rotate"></i>
        </div>
        
        <div class="add-todo-container">
            <input class="add-todo" type="text" name="add-todo" placeholder="Add to your list...">
            <i class="fa-solid fa-plus add"></i>
        </div>
        
        <div class="todos-list">
            
        </div>

        <div class="clear-container">
            <a class="clear" href="#">Clear all completed</a>
        </div>
        
    </div>
`;

test('Add task to array and localstorage', () => {
  const taskarr = [];
  todoObj.add({ description: 'task 1', completed: false, index: 1 }, taskarr);
  const storage = JSON.parse(localStorage.getItem('todos'));
  expect(storage.length === taskarr.length).toBe(true);
});

test('Remove task from array and localstorage', () => {
  const taskarr = [{ description: 'task 1', completed: false, index: 1 }, { description: 'task 2', completed: false, index: 2 }];
  todoObj.remove(1, taskarr);
  const storage = JSON.parse(localStorage.getItem('todos'));
  expect(storage.length === taskarr.length).toBe(true);
});

test('Add task to array and localstorage', () => {
  const taskarr = [];
  todoObj.add({ description: 'task 1', completed: false, index: 1 }, taskarr);
  const storage = JSON.parse(localStorage.getItem('todos'));
  expect(storage.length === taskarr.length).toBe(true);
});

// let before;
// let after;
// let inputText;

// describe('add a number', () => {
//   beforeAll(() => {
//     document.body.innerHTML = htmlTemplate;
//     before = document.querySelectorAll('.todos-list div');
//     inputText = document.querySelector('.add-todo');
//     inputText.value = 'Mock Test';
//     addTodo();
//   });
// });