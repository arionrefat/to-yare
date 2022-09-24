const TodoItem: React.FC<{ text: string, onRemovedTodo: () => void}> = (props) => {
  return <li onClick={props.onRemovedTodo}>{props.text}</li>;
};

export default TodoItem;
