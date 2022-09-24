import axios, { AxiosResponse } from "axios";
import { Todo } from "@prisma/client";

export async function getTodo() {
  return await axios.get<any, AxiosResponse<any, Todo[]>>("api/todo");
}

export async function createTodo(payload: Pick<Todo, "userId" | "task">) {
  return await axios.post<any, AxiosResponse<any, Todo>>("api/todo", payload);
}

export async function updateTodo(id: string, text: string) {
  return await axios.put<any, AxiosResponse<any, Todo>>(`api/todo/${id}`, text);
}

export async function deleteTodo(id: string) {
  return await axios.delete<any, AxiosResponse<any, Todo>>(`api/todo/${id}`);
}

export default Todo;
