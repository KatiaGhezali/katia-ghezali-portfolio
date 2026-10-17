import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { name, email, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        error: "Please complete all fields.",
      });
    }

    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return res.status(400).json({
        error: "One or more fields exceed the allowed length.",
      });
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email.trim())) {
      return res.status(400).json({
        error: "Please enter a valid email address.",
      });
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.FROM_EMAIL],
      replyTo: email.trim(),
      subject: `Portfolio contact from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    return res.status(200).json({
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      error:
        "Something went wrong while sending your message. Please try again.",
    });
  }
}
