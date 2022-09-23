import { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Todo from './models/todo';

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
      <TodoList items={todos} onRemovedTodo={removeTodoHandler} />
    </div>
  );
}

export default Todos;
