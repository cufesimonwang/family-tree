import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query as { id: string };

  if (req.method === "GET") {
    const member = await prisma.member.findUnique({ where: { id } });
    res.json(member);
  } else if (req.method === "PUT") {
    const { name, birthDate, parentId } = req.body;
    const member = await prisma.member.update({
      where: { id },
      data: { name, birthDate: new Date(birthDate), parentId },
    });
    res.json(member);
  } else if (req.method === "DELETE") {
    await prisma.member.delete({ where: { id } });
    res.status(204).end();
  }
}
