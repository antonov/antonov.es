import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

type EmailPayload = {
    to: string
    subject: string
    text: string
  }
  
  // Replace with your SMTP credentials
  const smtpOptions = {
    host: process.env.SMTP_HOST || "",
    port: parseInt(process.env.SMTP_PORT || ""),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || "user",
      pass: process.env.SMTP_PASSWORD || "password",
    },
  }
  
  export const sendEmail = async (data: EmailPayload) => {
    const transporter = nodemailer.createTransport({
      ...smtpOptions,
    })
  
    return await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      ...data,
    })
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const text = Object.keys(req.body)
    .map(key => `${key}: ${req.body[key]}`)
    .join("\n");

    const info = await sendEmail({
       to: process.env.SMTP_TO_USER || '',
       subject: "[antonov.es] Contact Form",
       text: text,
    });

    if (info.messageId) {
        return res.status(200).json({ message: "Email sent successfully"});
    }
    
    return res.status(500).json({ message: "Server error"});
    
  }