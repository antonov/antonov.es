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

type ContactFormData = {
    name: string,
    email: string,
    phone: string,
    budget: string,
    message: string
  };
export async function POST(request: Request) {


    const contactFormData: ContactFormData = await request.json() as ContactFormData;
    const text = Object.keys(contactFormData)
    .map(key => `${key}: ${contactFormData[key as keyof ContactFormData]}`)
    .join("\n");

    const info = await sendEmail({
       to: process.env.SMTP_TO_USER || '',
       subject: "[antonov.es] Contact Form",
       text: text,
    });

    if (info.messageId) {
        return new Response(  "Email sent successfully", {status: 200} );
    }

    return new Response("Server error", {status: 500});
    
  }