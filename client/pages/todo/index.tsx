import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { createTodo, deleteTodo, getTodo } from "./models/todo";

function Todos() {
  const queryClient = useQueryClient();

  const { data } = useQuery(["todos"], getTodo);

  const createTodoM = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const deleteTodoM = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const addTodoHandler = async (todoText: string) => {
    await createTodoM.mutateAsync({
      userId: "7a8f47af-b5d9-42e9-833c-375592290d50",
      task: todoText,
    });
  };
  const removeTodoHandler = async (todoId: string) => {
    await deleteTodoM.mutateAsync(todoId);
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
      <TodoList items={data?.data ?? []} onRemovedTodo={removeTodoHandler} />
    </div>
  );
}

export default Todos;
