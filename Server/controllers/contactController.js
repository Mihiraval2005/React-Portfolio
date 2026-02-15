import Contact from '../models/Contact.js';
import { sendEmail } from '../config/email.js';

export const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check for duplicate
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ success: false, message: "This email has already submitted a message" });
        }


        const newContact = new Contact({ name, email, message });
        await newContact.save();

        await sendEmail({
            to: email,
            subject: `Thank you for contacting us, ${name}!`,
            html: `
              <h1 style="color: #F87171; font-size: 24px; font-weight: 800; margin: 10px 0;text-align: center;">
        Mihir.
      </h1>
    <div style="font-family: Arial, sans-serif; color: #333;">
      <p>Hi ${name},</p>

    

      <p>Thank you for reaching out. We have received your message:</p>

      <blockquote style="border-left: 3px solid #eee; padding-left: 10px; color: #555; margin: 10px 0;">
        ${message}
      </blockquote>

      <p>We will get back to you as soon as possible.</p>

      <p>Best regards,<br/>
      <strong>Mihir Raval</strong></p>
    </div>
  `,
        });




        return res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};
