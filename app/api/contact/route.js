import { mailInfo } from "@/utils/profiles/ram/constants";
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
      subject: `New Contact Request from ${formData.firstname} ${formData.lastname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
          <h2 style="color: #333;">New Contact Request</h2>
          <p style="font-size: 16px; color: #555;">You have received a new contact request from your website. Here are the details:</p>
          <table style="width: 100%; margin-top: 20px;">
            <tr style="background-color: #f1f1f1;">
              <td style="padding: 10px; font-weight: bold; color: #333;">Name</td>
              <td style="padding: 10px;">${formData.firstname} ${formData.lastname}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #333;">Email</td>
              <td style="padding: 10px;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            <tr style="background-color: #f1f1f1;">
              <td style="padding: 10px; font-weight: bold; color: #333;">Phone</td>
              <td style="padding: 10px;">${formData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #333;">Service</td>
              <td style="padding: 10px;">${formData.service}</td>
            </tr>
            <tr style="background-color: #f1f1f1;">
              <td style="padding: 10px; font-weight: bold; color: #333;">Message</td>
              <td style="padding: 10px;">${formData.message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 16px; color: #555;">Please respond to the inquiry at your earliest convenience.</p>
        </div>
      `,
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
