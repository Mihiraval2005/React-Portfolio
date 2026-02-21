import Contact from "../models/Contact.js";
import { sendEmail } from "../config/email.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields before submitting the form."
      });
    }

    // Duplicate check
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(409).json({
        success: false,
        message:
          "We have already received a message from this email address. If this is urgent, please feel free to follow up directly."
      });
    }

    // Save to DB
    await Contact.create({ name, email, message });

    // Optional: Send Email Notification
    // await sendEmail({ name, email, message });

    return res.status(201).json({
      success: true,
      message:
        "Thank you for reaching out. Your message has been successfully sent. I will get back to you within 24–48 hours."
    });

  } catch (error) {
    console.error("Contact Error:", error);

    return res.status(500).json({
      success: false,
      message:
        "An unexpected error occurred while submitting your message. Please try again later."
    });
  }
};