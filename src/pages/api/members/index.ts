import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const members = await prisma.member.findMany({
        orderBy: { createdAt: "asc" },
      });
      return res.status(200).json(members);
    }

    if (req.method === "POST") {
      const { name, birthDate, parentId } = req.body;

      if (!name || !birthDate) {
        return res
          .status(400)
          .json({ error: "Name and birthDate are required." });
      }

      const member = await prisma.member.create({
        data: {
          name,
          birthDate: new Date(birthDate),
          parentId: parentId || null,
        },
      });

      return res.status(201).json(member);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
