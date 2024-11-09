import './styles.css';
import { TodoList, Todo } from './classes/index';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => {
    crearTodoHtml(todo)
});

// const tarea = new Todo('Aprender Javascript');

// todoList.nuevoTodo( tarea )

// console.log(todoList)

// crearTodoHtml(tarea);
