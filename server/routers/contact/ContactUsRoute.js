const express = require('express');
const Contact = require('../../models/ContactUs');
const router = express.Router();

router.post('/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const newContact = new Contact({ name, email, phone, message });

    try {
        await newContact.save();
        res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
        console.error('Error saving contact form submission:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
