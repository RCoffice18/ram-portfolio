import { mailInfo } from "@/utils/constants";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    const { firstname, lastname, email, phone, service, message } = body;

    const transporter = nodemailer.createTransport({
      host: mailInfo.EMAIL_SERVICE,
      port: 587,
      auth: {
        user: mailInfo.EMAIL_USER,
        pass: mailInfo.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: mailInfo.EMAIL_USER,
      subject: `New Contact Request from ${firstname} ${lastname}`,
      text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
