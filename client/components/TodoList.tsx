import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

const TodoList: React.FC<{
  items: Todo[];
  onRemovedTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.task} onRemovedTodo={props.onRemovedTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default TodoList;
