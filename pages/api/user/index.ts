import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const user = await prisma.user.create({ data: {} });
      res.status(200).json(user);
    }
  } catch (err: any) {
    res
      .status(400)
      .json(
        process.env.NODE_ENV === 'production'
          ? 'Something went wrong. Try again later'
          : err
      );
  }
}
