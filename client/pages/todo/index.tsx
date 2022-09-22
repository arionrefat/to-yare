import TodoList from './components/TodoList';

function Todos() {
  return (
    <div>
      <TodoList items={['Learn React', 'Learn TypeScript']} />
    </div>
  );
}

export default Todos;
