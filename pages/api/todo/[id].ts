import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "PUT") {
      const todo = await prisma.todo.update({
        where: { id: req?.query?.id as string },
        data: { task: req.body.task },
      });
      res.status(200).json(todo);
    }
    if (req.method === "DELETE") {
      const todo = await prisma.todo.delete({ where: { id: req?.query?.id as string } });
      res.status(200).json(todo);
    }
  } catch (err: any) {
    res.status(400).json(process.env.NODE_ENV === "production" ? "Something went wrong. Try again later" : err);
  }
}
