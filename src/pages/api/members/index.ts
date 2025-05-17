import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const members = await prisma.member.findMany();
    res.json(members);
  } else if (req.method === "POST") {
    const { name, birthDate, parentId } = req.body;
    const member = await prisma.member.create({
      data: { name, birthDate: new Date(birthDate), parentId },
    });
    res.status(201).json(member);
  }
}
