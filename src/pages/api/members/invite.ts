import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, url } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // or your email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Family Tree" <cufesimonwang@gmail.com>',
    to: email,
    subject: "You're invited to join the Family Tree",
    html: `<p>Click <a href="${url}">here</a> to join.</p>`,
  });

  res.status(200).json({ message: "Email sent" });
}
