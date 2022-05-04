/*
 * @jest-environment jsdom
 */
import Todo from './todo.js';

const todoObj = new Todo();

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