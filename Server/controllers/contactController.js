import Contact from '../models/Contact.js';

// POST /api/contact
export const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Check if a contact with the same email already exists
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return res.status(400).json({ success: false, message: "This email has already submitted a message" });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        return res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};
