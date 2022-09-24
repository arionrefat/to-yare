import axios, { AxiosResponse } from "axios";
import { User } from "@prisma/client";

export async function createUser() {
  return await axios.post<any, AxiosResponse<any, User>>("api/user");
}

export async function getUser(id: string) {
  return await axios.get<any, AxiosResponse<any, User>>(`api/user/${id}`);
}
