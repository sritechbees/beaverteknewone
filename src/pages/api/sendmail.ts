
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ApiResponse = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      fullName,
      organization,
      role,
      email,
      phone,
      message,
    } = req.body ?? {};

    // REQUIRED FIELD VALIDATION
    if (
      typeof fullName !== "string" ||
      !fullName.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof phone !== "string" ||
      !phone.trim() ||
      typeof role !== "string" ||
      !role.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone, and service are required.",
      });
    }

    // OPTIONAL FIELD TYPE VALIDATION
    if (
      (organization !== undefined &&
        typeof organization !== "string") ||
      (message !== undefined && typeof message !== "string")
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data.",
      });
    }

    const cleanName = fullName.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanCompany =
      typeof organization === "string"
        ? organization.trim()
        : "";
    const cleanRole = role.trim();
    const cleanMessage =
      typeof message === "string" ? message.trim() : "";

    // LENGTH VALIDATION
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanPhone.length > 20 ||
      cleanCompany.length > 150 ||
      cleanRole.length > 200 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "One or more fields exceed the allowed length.",
      });
    }

    // NAME VALIDATION
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ.'\s-]+$/.test(cleanName)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid name.",
      });
    }

    // EMAIL VALIDATION
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // PHONE VALIDATION
    const phoneDigits = cleanPhone.replace(/\D/g, "");

    if (
      !/^\+?[0-9\s()-]+$/.test(cleanPhone) ||
      phoneDigits.length < 7 ||
      phoneDigits.length > 15
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid phone number.",
      });
    }

    // EMAIL ENVIRONMENT VARIABLES
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_APP_PASSWORD;
    const ownerEmail = process.env.OWNER_EMAIL;

    if (!emailUser || !emailPassword || !ownerEmail) {
      console.error("Email environment variables are missing.");

      return res.status(500).json({
        success: false,
        message: "Email configuration is missing.",
      });
    }

    // CREATE GMAIL TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPassword.replace(/\s/g, ""),
      },
    });

    // SEND EMAIL
    await transporter.sendMail({
      from: `"BeaverTek Website" <${emailUser}>`,
      to: ownerEmail,
      replyTo: cleanEmail,
      subject: `New BeaverTek Inquiry - ${cleanName}`,
      text: `
New inquiry received from the BeaverTek website.

Full Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone}
Company: ${cleanCompany || "Not provided"}
What can we help with?: ${cleanRole}

Message:
${cleanMessage || "Not provided"}
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Nodemailer error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to send email. Please try again.",
    });
  }
}
