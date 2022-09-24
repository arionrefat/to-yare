import React from 'react';
import Todo from '../utils/models/todo';
import TodoItem from './TodoItem';
import { Stack } from '@mui/material';

const TodoList: React.FC<{
  items: Todo[];
  onRemovedTodo: (id: string) => void;
}> = (props) => {
  return (
    <Stack direction='column' spacing={2} p={2}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.task}
          onRemovedTodo={props.onRemovedTodo.bind(null, item.id)}
        />
      ))}
    </Stack>
  );
};

export default TodoList;
