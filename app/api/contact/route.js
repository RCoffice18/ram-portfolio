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
      subject: `Service Request from ${firstname} ${lastname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #1c1c22;">
          <h2 style="color: #8E2DE2;">Service Request</h2>
          <p style="font-size: 16px; color: #fff;">A client has requested a service from your website. Here are the details:</p>
          <table style="width: 100%; margin-top: 20px; background-color: #1c1c22; color: #fff;">
            <tr style="background-color: #1c1c22;">
              <td style="padding: 10px; font-weight: bold; color: #8E2DE2;">Name</td>
              <td style="padding: 10px; color: #fff;">${firstname} ${lastname}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #8E2DE2;">Email</td>
              <td style="padding: 10px; color: #fff;"><a href="mailto:${email}" style="color: #8E2DE2;">${email}</a></td>
            </tr>
            <tr style="background-color: #1c1c22;">
              <td style="padding: 10px; font-weight: bold; color: #8E2DE2;">Phone</td>
              <td style="padding: 10px; color: #fff;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; color: #8E2DE2;">Service</td>
              <td style="padding: 10px; color: #fff;">${service}</td>
            </tr>
            <tr style="background-color: #1c1c22;">
              <td style="padding: 10px; font-weight: bold; color: #8E2DE2;">Message</td>
              <td style="padding: 10px; color: #fff;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 16px; color: #555;">Please respond to the request at your earliest convenience.</p>
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
