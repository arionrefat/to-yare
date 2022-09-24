import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const user = await prisma.user.findUnique({
        where: { id: req?.query?.id as string },
      });
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
