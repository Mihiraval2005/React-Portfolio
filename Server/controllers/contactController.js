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
            text: `Hi ${name},\n\n` +
                `Thank you for reaching out. We have received your message:\n\n` +
                `"${message}"\n\n` +
                `We will get back to you as soon as possible.\n\n` +
                `Best regards,\n` +
                `Mihir Raval`,
        });


        return res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};
