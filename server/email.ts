import { createTransport, type Transporter } from "nodemailer";
import type { InsertContactMessage } from "@shared/schema";

// Email configuration
let transporter: Transporter;

// Initialize email transporter
function getTransporter(): Transporter {
  if (!transporter) {
    // Get email credentials from environment variables
    const emailHost = process.env.EMAIL_HOST || "smtp.example.com";
    const emailPort = parseInt(process.env.EMAIL_PORT || "587", 10);
    const emailUser = process.env.EMAIL_USER || "user@example.com";
    const emailPass = process.env.EMAIL_PASS || "password";
    const emailSecure = process.env.EMAIL_SECURE === "true";

    transporter = createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailSecure,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });
  }

  return transporter;
}

// Send email notification for contact form submissions
export async function sendContactEmail(message: InsertContactMessage): Promise<boolean> {
  try {
    const emailTransporter = getTransporter();
    
    // Destination email address
    const toEmail = process.env.CONTACT_EMAIL || "gjfitnesscenter@gmail.com";
    
    // Email subject
    const subject = "New Contact Form Submission";
    
    // Format email body
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${message.name}</p>
      <p><strong>Email:</strong> ${message.email}</p>
      ${message.phone ? `<p><strong>Phone:</strong> ${message.phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.message.replace(/\n/g, '<br>')}</p>
      <p><em>This message was sent from the G&J Fitness for Life Center website contact form.</em></p>
    `;
    
    // Send email
    await emailTransporter.sendMail({
      from: `"G&J Fitness for Life Center" <${process.env.EMAIL_FROM || "noreply@gjfitnessforlife.com"}>`,
      to: toEmail,
      subject: subject,
      html: emailBody,
      replyTo: message.email,
    });
    
    // Also send confirmation email to the user
    const confirmationSubject = "Thank you for contacting G&J Fitness for Life Center";
    const confirmationBody = `
      <h2>Thank you for contacting G&J Fitness for Life Center!</h2>
      <p>Dear ${message.name},</p>
      <p>We've received your message and will get back to you shortly. Here's a copy of the information you submitted:</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p>If you have any urgent questions, please call us at 903.569.9400.</p>
      <p>Best regards,<br>The G&J Fitness for Life Center Team</p>
    `;
    
    await emailTransporter.sendMail({
      from: `"G&J Fitness for Life Center" <${process.env.EMAIL_FROM || "noreply@gjfitnessforlife.com"}>`,
      to: message.email,
      subject: confirmationSubject,
      html: confirmationBody,
    });
    
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    // Don't throw error, just return false to indicate failure
    // This way the contact form submission can still be saved
    return false;
  }
}
