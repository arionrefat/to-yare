import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const todo = await prisma.todo.create({ data: { ...req.body } });
      res.status(200).json(todo);
    }
    if (req.method === "GET") {
      const todos = await prisma.todo.findMany();
      res.status(200).json(todos);
    }
  } catch (err: any) {
    res.status(400).json(err);
  }
}
