import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import NewTodo from "../../components/NewTodo";
import TodoList from "../../components/TodoList";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../../utils/models/todo";

function Todos() {
  const queryClient = useQueryClient();

  const { data } = useQuery(["todos"], getTodo);

  const updateTodoM = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const updateTodoHandler = async (todoId: string) => {
    const enteredName = prompt("Please enter your updated todo") as string;
    if (enteredName) {
      await updateTodoM.mutateAsync({ id: todoId, task: enteredName });
    }
  };

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
      <TodoList items={data?.data ?? []} onRemovedTodo={removeTodoHandler} onUpdatedTodo={updateTodoHandler} />
    </div>
  );
}

export default Todos;
